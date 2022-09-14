using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using LightingServices.App.Common.Mapping;
using System.Reflection;
using LightingServices.App.Interfaces;
using LightingServices.Api.Controllers;
using Serilog;

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
            })
                .UseSerilog((context, loggerConfiguration) =>
                {
                    loggerConfiguration
                    .ReadFrom.Configuration(context.Configuration)
                    .Enrich.FromLogContext()
                    .WriteTo.Debug()
                    .WriteTo.File("log/log.txt", rollingInterval: RollingInterval.Day)
                    .WriteTo.Console(outputTemplate: "[{Timestamp:HH:mm:ss} {Level:u3}] {Message:lj} {Properties:j}{NewLine}{Exception}");
                });


            return hostBuilder;
        }
    }
}
