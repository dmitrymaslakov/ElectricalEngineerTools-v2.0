using Microsoft.Extensions.DependencyInjection;
using System.Reflection;
using MediatR;
using Microsoft.Extensions.Hosting;

namespace LightingServices.App
{
    public static class DependencyInjection
    {
        public static IHostBuilder AddApplication(this IHostBuilder hostBuilder)
        {
            hostBuilder.ConfigureServices(services
                => services.AddMediatR(Assembly.GetExecutingAssembly()));

            return hostBuilder;
        }
    }
}
