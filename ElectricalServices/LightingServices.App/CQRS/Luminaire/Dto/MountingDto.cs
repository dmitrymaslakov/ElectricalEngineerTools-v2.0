using AutoMapper;
using ElectricalServices.Domain.Lighting;
using LightingServices.App.Common.Mapping;

namespace LightingServices.App.CQRS.Luminaire.Dto
{
    public class MountingDto : IMapWith<Mounting>
    {
        public string MountingType { get; set; }
        public string MountingSubtype { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Mounting, MountingDto>();
        }
    }
}
