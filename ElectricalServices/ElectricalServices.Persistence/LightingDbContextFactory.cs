using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectricalServices.Persistence
{
    public class LightingDbContextFactory : IDbContextFactory<LightingDbContext>
    {
        public LightingDbContext Create()
        {
            return new LightingDbContext(new LightingDbContextBase());
        }
    }
}
