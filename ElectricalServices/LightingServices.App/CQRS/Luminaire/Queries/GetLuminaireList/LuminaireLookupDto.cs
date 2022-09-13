using AutoMapper;
using ElectricalServices.Domain.Lighting;
using LightingServices.App.Common.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LightingServices.App.CQRS.Luminaire.Queries.GetLuminaireList
{
    public class LuminaireLookupDto : IMapWith<LightingFixture>
    {
        public int Id { get; set; }
        public string Brand { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<LightingFixture, LuminaireLookupDto>()
                .ForMember(lumDto => lumDto.Id,
                    opt => opt.MapFrom(lf => lf.Id))
                .ForMember(lumDto => lumDto.Brand,
                    opt => opt.MapFrom(lf => lf.Brand));
        }
    }
}
