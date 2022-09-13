using MediatR;
using System;

namespace LightingServices.App.CQRS.Luminaire.Commands.DeleteLuminaire
{
    public class DeleteLuminaireCommand : IRequest
    {
        public int Id { get; set; }
    }
}
