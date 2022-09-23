using LightingServices.App.CQRS.Luminaire.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LightingServices.App.Common.Pading
{
    public class IndexViewModel<T>
    {
        public IEnumerable<T> Entities { get; set; }
        public PageViewModel PageViewModel { get; set; }
    }
}
