using LightingServices.App.CQRS.Luminaire.Dto;
using MediatR;

namespace LightingServices.App.CQRS.Luminaire.Commands.CreateLuminaire
{
    public class CreateLuminaireCommand : IRequest<int>
    {
        public LuminaireDto Luminaire { get; set; }
    }
}
