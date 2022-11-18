using AutoMapper;
using ElectricalServices.Domain.Lighting;
using LightingServices.App.Common.Mapping;

namespace LightingServices.App.CQRS.Luminaire.Dto
{
    public class DimensionsDto : IMapWith<Dimensions>
    {
        public double Length { get; set; }
        public double Width { get; set; }
        public double Diameter { get; set; }
        public double LengthOnDwg { get; set; }
        public double WidthOnDwg { get; set; }
        public double DiameterOnDwg { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Dimensions, DimensionsDto>();
        }
    }
}
