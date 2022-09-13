using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectricalServices.Persistence
{
    public class LightingDbContextBase
    {

        public LightingDbContextBase(IOptions<ConnectionStrings> options)
        {
            Options = options;
        }

        public IOptions<ConnectionStrings> Options { get; private set; }
    }
}
