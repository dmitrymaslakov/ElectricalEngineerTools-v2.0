using LightingServices.App.CQRS.Luminaire.Dto;
using MediatR;
using System;

namespace LightingServices.App.CQRS.Luminaire.Commands.UpdateLuminaire
{
    public class UpdateLuminaireCommand : IRequest<LuminaireDto>
    {
        //public LuminaireDto Luminaire { get; set; }
        public ChangedLuminaire ChangedLuminaire { get; set; }
    }
}
