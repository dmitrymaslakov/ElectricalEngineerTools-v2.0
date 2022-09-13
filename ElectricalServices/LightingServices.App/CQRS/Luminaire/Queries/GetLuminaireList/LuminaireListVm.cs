using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LightingServices.App.CQRS.Luminaire.Queries.GetLuminaireList
{
    public class LuminaireListVm
    {
        public IList<LuminaireLookupDto> Luminaires { get; set; }
    }
}
