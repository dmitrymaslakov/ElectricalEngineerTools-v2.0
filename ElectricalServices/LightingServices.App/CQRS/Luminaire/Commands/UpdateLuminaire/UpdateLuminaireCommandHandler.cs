using ElectricalServices.Domain.Lighting;
using LightingServices.App.Common.Exceptions;
using LightingServices.App.CQRS.Luminaire.Dto;
using LightingServices.App.Interfaces;
using MediatR;
using Newtonsoft.Json.Linq;
using System.Data.Entity;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using AutoMapper;
using System.Collections.Generic;

namespace LightingServices.App.CQRS.Luminaire.Commands.UpdateLuminaire
{
    public class UpdateLuminaireCommandHandler : IRequestHandler<UpdateLuminaireCommand, LuminaireDto>
    {
        private readonly ILightingDbContext _dbContext;
        private readonly IMapper _mapper;

        public UpdateLuminaireCommandHandler(ILightingDbContext dbContext, IMapper mapper) =>
            (_dbContext, _mapper) = (dbContext, mapper);

        public async Task<LuminaireDto> Handle(UpdateLuminaireCommand request,
            CancellationToken cancellationToken)
        {
            var luminaire1 =
                await _dbContext.LightingFixtures.Where(lf => lf.Id == 22).FirstOrDefaultAsync();

            var luminaire =
                await _dbContext.LightingFixtures.FirstOrDefaultAsync(lf =>
                    lf.Id == request.ChangedLuminaire.Id, cancellationToken);

            if (luminaire == null || luminaire.Id != request.ChangedLuminaire.Id)
            {
                throw new NotFoundException(nameof(LightingFixture), request.ChangedLuminaire.Id);
            }

            foreach (var parameter in request.ChangedLuminaire.ChangedParameters)
            {
                switch (parameter.Key)
                {
                    case nameof(luminaire.Manufacturer):
                        await ChangeManufacturer(luminaire, parameter, cancellationToken);
                        break;
                    case nameof(luminaire.Brand):
                        luminaire.Brand = (string)parameter.Value;
                        break;
                    case nameof(luminaire.LightSourceInfo):
                        await ChangeLightSourceInfo(luminaire, parameter, cancellationToken);
                        break;
                    case nameof(luminaire.TechnicalSpecifications):
                        await ChangeTechnicalSpecifications(luminaire, parameter, cancellationToken);
                        break;
                    case nameof(luminaire.Mounting):
                        await ChangeMounting(luminaire, parameter, cancellationToken);
                        break;
                    case nameof(luminaire.ClimateApplication):
                        await ChangeClimateApplication(luminaire, parameter, cancellationToken);
                        break;
                    case nameof(luminaire.DiffuserMaterial):
                        await ChangeDiffuserMaterial(luminaire, parameter, cancellationToken);
                        break;
                    case nameof(luminaire.IP):
                        await ChangeIP(luminaire, parameter, cancellationToken);
                        break;
                    case nameof(luminaire.EquipmentClass):
                        await ChangeEquipmentClass(luminaire, parameter, cancellationToken);
                        break;
                    case nameof(luminaire.IsFireproof):
                        luminaire.IsFireproof = (bool)parameter.Value;
                        break;
                    case nameof(luminaire.IsExplosionProof):
                        luminaire.IsExplosionProof = (bool)parameter.Value;
                        break;
                    case nameof(luminaire.BPSU):
                        luminaire.BPSU = (bool)parameter.Value;
                        break;
                    case nameof(luminaire.Dimensions):
                        await ChangeDimensions(luminaire, parameter, cancellationToken);
                        break;
                    case nameof(luminaire.LdtIesFile):
                        luminaire.LdtIesFile = (string)parameter.Value;
                        break;
                    case nameof(luminaire.Cable):
                        await ChangeCable(luminaire, parameter, cancellationToken);
                        break;
                    default:
                        break;
                }
            }
            await _dbContext.SaveChangesAsync();

            return _mapper.Map<LuminaireDto>(luminaire);
        }

        private async Task ChangeCable(LightingFixture luminaire, KeyValuePair<string, JToken> parameter, CancellationToken cancellationToken)
        {
            var cableDto = parameter.Value.ToObject<CableDto>();

            var cableDb = await _dbContext.Cables
                .FirstOrDefaultAsync(c => c.Brand == cableDto.Brand &&
                    c.CoresNumber == cableDto.CoresNumber &&
                    c.Section == cableDto.Section,
                    cancellationToken);

            Cable newCable = null;

            if (cableDb == null)
            {
                newCable = new Cable
                {
                    Brand = cableDto.Brand,
                    CoresNumber = cableDto.CoresNumber,
                    Section = cableDto.Section
                };
                luminaire.CableId = _dbContext.Cables.Add(newCable).Id;
            }
            else
            {
                luminaire.CableId = cableDb.Id;
            }
        }

        private async Task ChangeDimensions(LightingFixture luminaire, KeyValuePair<string, JToken> parameter, CancellationToken cancellationToken)
        {
            var dimensionsDTO = parameter.Value.ToObject<DimensionsDto>();

            var dimensionsDb = await _dbContext.Dimensions
                .FirstOrDefaultAsync(dim =>
                    dim.Width == dimensionsDTO.Width &&
                    dim.Length == dimensionsDTO.Length &&
                    dim.Diameter == dimensionsDTO.Diameter &&
                    dim.WidthOnDwg == dimensionsDTO.WidthOnDwg &&
                    dim.LengthOnDwg == dimensionsDTO.LengthOnDwg &&
                    dim.DiameterOnDwg == dimensionsDTO.DiameterOnDwg,
                    cancellationToken);

            Dimensions newDimensions = null;

            if (dimensionsDb == null)
            {
                newDimensions = new Dimensions
                {
                    Width = dimensionsDTO.Width == 0 ? null : dimensionsDTO.Width,
                    Length = dimensionsDTO.Length == 0 ? null : dimensionsDTO.Length,
                    Diameter = dimensionsDTO.Diameter == 0 ? null : dimensionsDTO.Diameter,
                    WidthOnDwg = dimensionsDTO.WidthOnDwg == 0 ? null : dimensionsDTO.WidthOnDwg,
                    LengthOnDwg = dimensionsDTO.LengthOnDwg == 0 ? null : dimensionsDTO.LengthOnDwg,
                    DiameterOnDwg = dimensionsDTO.DiameterOnDwg == 0 ? null : dimensionsDTO.DiameterOnDwg
                };
                luminaire.DimensionsId = _dbContext.Dimensions.Add(newDimensions).Id;
            }
            else
            {
                luminaire.DimensionsId = dimensionsDb.Id;
            }
        }

        private async Task ChangeEquipmentClass(LightingFixture luminaire, KeyValuePair<string, JToken> parameter, CancellationToken cancellationToken)
        {
            var equipmentClassDb = await _dbContext.EquipmentClasses.FirstOrDefaultAsync(eq => eq.Value == (string)parameter.Value, cancellationToken);
            EquipmentClass newEquipmentClass = null;

            if (equipmentClassDb == null)
            {
                newEquipmentClass = new EquipmentClass { Value = (string)parameter.Value };
                luminaire.EquipmentClassId = _dbContext.EquipmentClasses.Add(newEquipmentClass).Id;
            }
            else
            {
                luminaire.EquipmentClassId = equipmentClassDb.Id;
            }
        }

        private async Task ChangeIP(LightingFixture luminaire, KeyValuePair<string, JToken> parameter, CancellationToken cancellationToken)
        {
            var IPDb = await _dbContext.IngressProtections.FirstOrDefaultAsync(ip => ip.Value == (int)parameter.Value, cancellationToken);
            IngressProtection newIP = null;

            if (IPDb == null)
            {
                newIP = new IngressProtection { Value = (int)parameter.Value };
                luminaire.IPId = _dbContext.IngressProtections.Add(newIP).Id;
            }
            else
            {
                luminaire.IPId = IPDb.Id;
            }
        }

        private async Task ChangeDiffuserMaterial(LightingFixture luminaire, KeyValuePair<string, JToken> parameter, CancellationToken cancellationToken)
        {
            var diffuserMaterialDb = await _dbContext.DiffuserMaterials.FirstOrDefaultAsync(dm => dm.Description == (string)parameter.Value, cancellationToken);
            DiffuserMaterial newDiffuserMaterial = null;

            if (diffuserMaterialDb == null)
            {
                newDiffuserMaterial = new DiffuserMaterial { Description = (string)parameter.Value };
                luminaire.DiffuserMaterialId = _dbContext.DiffuserMaterials.Add(newDiffuserMaterial).Id;
            }
            else
            {
                luminaire.DiffuserMaterialId = diffuserMaterialDb.Id;
            }
        }

        private async Task ChangeClimateApplication(LightingFixture luminaire, KeyValuePair<string, JToken> parameter, CancellationToken cancellationToken)
        {
            var climateApplicationDb = await _dbContext.ClimateApplications.FirstOrDefaultAsync(cla => cla.Value == (string)parameter.Value, cancellationToken);
            ClimateApplication newClimateApplication = null;

            if (climateApplicationDb == null)
            {
                newClimateApplication = new ClimateApplication { Value = (string)parameter.Value };
                luminaire.ClimateApplicationId = _dbContext.ClimateApplications.Add(newClimateApplication).Id;
            }
            else
            {
                luminaire.ClimateApplicationId = climateApplicationDb.Id;
            }
        }

        private async Task ChangeManufacturer(LightingFixture luminaire, KeyValuePair<string, JToken> parameter, CancellationToken cancellationToken)
        {
            var manufacturerDb = await _dbContext.Manufacturers.FirstOrDefaultAsync(m => m.Name == (string)parameter.Value, cancellationToken);
            Manufacturer newManufacturer = null;

            if (manufacturerDb == null)
            {
                newManufacturer = new Manufacturer { Name = (string)parameter.Value };
                luminaire.ManufacturerId = _dbContext.Manufacturers.Add(newManufacturer).Id;
            }
            else
            {
                luminaire.ManufacturerId = manufacturerDb.Id;
            }
        }

        private async Task ChangeLightSourceInfo(LightingFixture luminaire, KeyValuePair<string, JToken> parameter, CancellationToken cancellationToken)
        {
            var lsiDto = parameter.Value.ToObject<LightSourceInfoDto>();

            var lsiDb = await _dbContext.LightSourceInfoes
                .FirstOrDefaultAsync(lsi => lsi.Socle == lsiDto.Socle &&
                    lsi.LightSourceType == lsiDto.LightSourceType &&
                    lsi.Power == lsiDto.Power &&
                    lsi.LampsNumber == lsiDto.LampsNumber,
                    cancellationToken);

            LightSourceInfo newLsi = null;

            if (lsiDb == null)
            {
                newLsi = new LightSourceInfo
                {
                    LampsNumber = lsiDto.LampsNumber,
                    Power = lsiDto.Power,
                    LightSourceType = lsiDto.LightSourceType,
                    Socle = lsiDto.Socle
                };
                luminaire.LightSourceInfoId = _dbContext.LightSourceInfoes.Add(newLsi).Id;
            }
            else
            {
                luminaire.LightSourceInfoId = lsiDb.Id;
            }
        }

        private async Task ChangeMounting(LightingFixture luminaire, KeyValuePair<string, JToken> parameter, CancellationToken cancellationToken)
        {
            var mountingDto = parameter.Value.ToObject<MountingDto>();

            var mountingDb = await _dbContext.Mountings
                .FirstOrDefaultAsync(m => m.MountingType == mountingDto.MountingType &&
                    m.MountingSubtype == mountingDto.MountingSubtype,
                    cancellationToken);

            Mounting newMounting = null;

            if (mountingDb == null)
            {
                newMounting = new Mounting
                {
                    MountingType = mountingDto.MountingType,
                    MountingSubtype = mountingDto.MountingSubtype
                };
                luminaire.MountingId = _dbContext.Mountings.Add(newMounting).Id;
            }
            else
            {
                luminaire.MountingId = mountingDb.Id;
            }
        }

        private async Task ChangeTechnicalSpecifications(LightingFixture luminaire, KeyValuePair<string, JToken> parameter, CancellationToken cancellationToken)
        {
            var techSpecDb = await _dbContext.TechnicalSpecifications.FirstOrDefaultAsync(tSpec => tSpec.Number == (string)parameter.Value, cancellationToken);
            TechnicalSpecifications newtechSpec = null;

            if (techSpecDb == null)
            {
                newtechSpec = new TechnicalSpecifications { Number = (string)parameter.Value };
                luminaire.TechnicalSpecificationsId = _dbContext.TechnicalSpecifications.Add(newtechSpec).Id;
            }
            else
            {
                luminaire.TechnicalSpecificationsId = techSpecDb.Id;
            }
        }
    }
}
