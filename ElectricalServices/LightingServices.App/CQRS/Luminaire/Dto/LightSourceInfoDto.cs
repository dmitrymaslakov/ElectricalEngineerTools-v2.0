using AutoMapper;
using ElectricalServices.Domain.Lighting;
using LightingServices.App.Common.Mapping;

namespace LightingServices.App.CQRS.Luminaire.Dto
{
    public class LightSourceInfoDto : IMapWith<LightSourceInfo>
    {
        public string Power { get; set; }
        public string LightSourceType { get; set; }
        public string Socle { get; set; }
        public int? LampsNumber { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<LightSourceInfo, LightSourceInfoDto>();
        }
    }
}
