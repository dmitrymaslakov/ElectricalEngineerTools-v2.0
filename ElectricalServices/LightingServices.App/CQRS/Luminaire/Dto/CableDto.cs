using AutoMapper;
using ElectricalServices.Domain.Lighting;
using LightingServices.App.Common.Mapping;

namespace LightingServices.App.CQRS.Luminaire.Dto
{
    public class CableDto : IMapWith<Cable>
    {
        public string Brand { get; set; }
        public int CoresNumber { get; set; }
        public double Section { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Cable, CableDto>();
        }
    }
}
