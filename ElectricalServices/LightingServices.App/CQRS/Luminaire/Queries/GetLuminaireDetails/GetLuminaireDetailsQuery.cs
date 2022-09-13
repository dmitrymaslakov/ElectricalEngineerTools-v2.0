using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LightingServices.App.CQRS.Luminaire.Queries.GetLuminaireDetails
{
    public class GetLuminaireDetailsQuery : IRequest<LuminaireDetailsVm>
    {
        public int Id { get; set; }
    }
}
