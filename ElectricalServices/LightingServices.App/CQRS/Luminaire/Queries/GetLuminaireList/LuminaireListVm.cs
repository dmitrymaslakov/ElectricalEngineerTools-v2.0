using LightingServices.App.Common.Pading;
using LightingServices.App.CQRS.Luminaire.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LightingServices.App.CQRS.Luminaire.Queries.GetLuminaireList
{
    public class LuminaireListVm
    {
        public IndexViewModel<LuminaireDto> Luminaires { get; set; }
    }
}
