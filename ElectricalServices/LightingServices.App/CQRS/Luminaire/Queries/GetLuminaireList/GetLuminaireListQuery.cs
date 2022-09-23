using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LightingServices.App.CQRS.Luminaire.Queries.GetLuminaireList
{
    public class GetLuminaireListQuery : IRequest<LuminaireListVm>
    {
        public int Page{ get; set; }
        public int PageSize{ get; set; }
    }
}
