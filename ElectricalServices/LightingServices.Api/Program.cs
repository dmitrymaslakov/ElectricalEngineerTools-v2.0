using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using static Ac.NetApi.Rivilis;
using AcAppServices = Autodesk.AutoCAD.ApplicationServices;
using Autodesk.AutoCAD.Geometry;
using Autodesk.AutoCAD.EditorInput;
using AcRnt = Autodesk.AutoCAD.Runtime;
using Newtonsoft.Json;

[assembly: AcRnt.ExtensionApplication(typeof(LightingServices.Api.Program))]

namespace LightingServices.Api
{
    public sealed class Program : AcRnt.IExtensionApplication
    {
        private IHost _host;

        public void Initialize()
        {
            var configuration = new ConfigurationBuilder()
                .AddEnvironmentVariables()
                .AddJsonFile("appsettings.json")
                .Build();

            _host = Host.CreateDefaultBuilder().Build();
            _host.Start();
        }

        private static IHostBuilder CreateHostBuilder(string[] args = null)
        {
            return Host.CreateDefaultBuilder()
                .Use
                ;
        }

        public void Terminate()
        {
        }
    }
}
