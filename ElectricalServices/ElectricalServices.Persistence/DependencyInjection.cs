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

namespace ElectricalServices.Persistence
{
    public static class DependencyInjection
    {
        public static IHostBuilder AddPersistence(this IHostBuilder hostBuilder)
        {
            hostBuilder.ConfigureServices((context, services) =>
            {
                IConfiguration configuration = context.Configuration;

                services.Configure<ConnectionStrings>(strings 
                    => configuration.GetSection(nameof(ConnectionStrings)).Bind(strings));

                Func<IServiceProvider, string> getConnectionString = provider
                    => provider.GetService<IOptions<ConnectionStrings>>().Value.MySql;

                services.AddScoped<ILightingDbContext>(provider 
                    => new LightingDbContext(getConnectionString(provider)));
            });

            return hostBuilder;
        }
    }
}
