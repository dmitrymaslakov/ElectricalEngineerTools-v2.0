using AutoMapper;
using ElectricalServices.Domain.Lighting;
using LightingServices.App.Common.Mapping;

namespace LightingServices.App.CQRS.Luminaire.Queries.GetLuminaireDetails
{
    public class LuminaireDetailsVm : IMapWith<LightingFixture>
    {
        public int Id { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<LightingFixture, LuminaireDetailsVm>()
                .ForMember(lumVm => lumVm.Id,
                    opt => opt.MapFrom(lf => lf.Id));
        }
    }
}