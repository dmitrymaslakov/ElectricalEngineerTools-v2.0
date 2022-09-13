using ElectricalServices.Domain.Lighting;
using LightingServices.App.Interfaces;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace LightingServices.App.CQRS.Luminaire.Commands.CreateLuminaire
{
    public class CreateLuminaireCommandHandler : IRequestHandler<CreateLuminaireCommand, int>
    {
        private readonly ILightingDbContext _dbContext;

        public CreateLuminaireCommandHandler(ILightingDbContext dbContext) =>
            _dbContext = dbContext;

        public async Task<int> Handle(CreateLuminaireCommand request,
            CancellationToken cancellationToken)
        {
            var luminaire = new LightingFixture
            {
                Manufacturer = new Manufacturer { Name = request.Luminaire.Manufacturer },
                Brand = request.Luminaire.Brand,
                LightSourceInfo = new LightSourceInfo 
                { 
                    LampsNumber = request.Luminaire.LightSourceInfo.LampsNumber, 
                    Power = request.Luminaire.LightSourceInfo.Power,
                    LightSourceType = request.Luminaire.LightSourceInfo.LightSourceType,
                    Socle = request.Luminaire.LightSourceInfo.Socle                    
                },
                TechnicalSpecifications = new TechnicalSpecifications { Number = request.Luminaire.TechnicalSpecifications},
                Mounting = new Mounting 
                { 
                    MountingType = request.Luminaire.Mounting.MountingType,
                    MountingSubtype = request.Luminaire.Mounting.MountingSubtype
                },
                ClimateApplication = new ClimateApplication { Value = request.Luminaire.ClimateApplication},
                DiffuserMaterial = new DiffuserMaterial { Description = request.Luminaire.DiffuserMaterial},
                IP = new IngressProtection { Value = request.Luminaire.IP},
                EquipmentClass = new EquipmentClass { Value = request.Luminaire.EquipmentClass},
                IsFireproof = request.Luminaire.IsFireproof,
                IsExplosionProof = request.Luminaire.IsExplosionProof,
                BPSU = request.Luminaire.BPSU,
                Dimensions = new Dimensions 
                { 
                    Diameter = request.Luminaire.Dimensions.Diameter,
                    Length = request.Luminaire.Dimensions.Length,
                    Width = request.Luminaire.Dimensions.Width
                },
                LdtIesFile = request.Luminaire.LdtIesFile,
                Cable = new Cable 
                {
                    Brand = request.Luminaire.Cable.Brand,
                    CoresNumber = request.Luminaire.Cable.CoresNumber,
                    Section = request.Luminaire.Cable.Section
                }
            };

            _dbContext.LightingFixtures.Add(luminaire);
            await _dbContext.SaveChangesAsync();

            return luminaire.Id;
        }
    }
}
