using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using LightingServices.App.Interfaces;
using Microsoft.Extensions.Options;
using System.Data.Entity.Infrastructure;

namespace ElectricalServices.Persistence
{
    public static class DependencyInjection
    {
        public static IHostBuilder AddPersistence(this IHostBuilder hostBuilder)
        {
            hostBuilder.ConfigureServices((context, services) =>
            {
                services.AddTransient<IDbContextFactory<LightingDbContext>, LightingDbContextFactory>();
                services.AddScoped<ILightingDbContext>(provider
                    => provider.GetService<IDbContextFactory<LightingDbContext>>().Create());
            });

            return hostBuilder;
        }
    }
}
