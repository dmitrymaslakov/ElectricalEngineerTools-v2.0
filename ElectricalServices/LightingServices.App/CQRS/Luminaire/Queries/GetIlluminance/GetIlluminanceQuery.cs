using LightingServices.App.CQRS.Luminaire.Dto;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LightingServices.App.CQRS.Luminaire.Queries.GetIlluminance
{
    public class GetIlluminanceQuery : IRequest<string>
    {
        public RoomDto Room { get; set; }
    }
}
