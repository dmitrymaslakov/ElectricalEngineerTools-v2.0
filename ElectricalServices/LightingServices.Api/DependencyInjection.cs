using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using LightingServices.App.Common.Mapping;
using System.Reflection;
using LightingServices.App.Interfaces;
using LightingServices.Api.Controllers;

namespace LightingServices.Api
{
    public static class DependencyInjection
    {
        public static IHostBuilder AddApi(this IHostBuilder hostBuilder)
        {
            hostBuilder.ConfigureServices(services =>
            {
                services.AddAutoMapper(config =>
                {
                    config.AddProfile(new AssemblyMappingProfile(Assembly.GetExecutingAssembly()));
                    config.AddProfile(new AssemblyMappingProfile(typeof(ILightingDbContext).Assembly));
                });
                services.AddTransient<LuminaireController>();
            });

            return hostBuilder;
        }
    }
}
