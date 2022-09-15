using AutoMapper;
using ElectricalServices.Domain.Lighting;
using LightingServices.App.Common.Mapping;

namespace LightingServices.App.CQRS.Luminaire.Dto
{
    public class LuminaireDto : IMapWith<LightingFixture>
    {
        public int Id { get; set; }
        public string Manufacturer { get; set; }
        public string Brand { get; set; }
        public LightSourceInfoDto LightSourceInfo { get; set; }
        public string TechnicalSpecifications { get; set; }
        public MountingDto Mounting { get; set; }
        public string ClimateApplication { get; set; }
        public string DiffuserMaterial { get; set; }
        public int IP { get; set; }
        public string EquipmentClass { get; set; }
        public bool IsFireproof { get; set; }
        public bool IsExplosionProof { get; set; }
        public bool BPSU { get; set; }
        public DimensionsDto Dimensions { get; set; }
        public string LdtIesFile { get; set; }
        public CableDto Cable { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<LightingFixture, LuminaireDto>()
                .ForMember(lumDto => lumDto.Manufacturer,
                    opt => opt.MapFrom(lf => lf.Manufacturer.Name))
                .ForMember(lumDto => lumDto.TechnicalSpecifications,
                    opt => opt.MapFrom(lf => lf.TechnicalSpecifications.Number))
                .ForMember(lumDto => lumDto.ClimateApplication,
                    opt => opt.MapFrom(lf => lf.ClimateApplication.Value))
                .ForMember(lumDto => lumDto.DiffuserMaterial,
                    opt => opt.MapFrom(lf => lf.DiffuserMaterial.Description))
                .ForMember(lumDto => lumDto.IP,
                    opt => opt.MapFrom(lf => lf.IP.Value))
                .ForMember(lumDto => lumDto.EquipmentClass,
                    opt => opt.MapFrom(lf => lf.EquipmentClass.Value));
        }
    }
}