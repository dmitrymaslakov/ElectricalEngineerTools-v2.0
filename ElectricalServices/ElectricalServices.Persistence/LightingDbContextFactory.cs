using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using Microsoft.Extensions.Configuration;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectricalServices.Persistence
{
    public class LightingDbContextFactory : IDbContextFactory<LightingDbContext>
    {
        public LightingDbContext Create()
        {
            IConfigurationRoot root = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            string connectionString = root.GetConnectionString("MySql");

            return new LightingDbContext(connectionString);
        }
    }
}
