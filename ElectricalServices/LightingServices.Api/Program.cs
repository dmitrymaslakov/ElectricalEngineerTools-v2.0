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
using ElectricalServices.Persistence;
using LightingServices.App;
using Microsoft.Extensions.DependencyInjection;
using Serilog;
using LightingServices.Api.Controllers;

[assembly: AcRnt.ExtensionApplication(typeof(LightingServices.Api.Program))]
//[assembly: AcRnt.CommandClass(typeof(LightingServices.Api.Controllers.LuminaireController))]
[assembly: AcRnt.CommandClass(typeof(LightingServices.Api.Program))]

namespace LightingServices.Api
{
    public sealed class Program : AcRnt.IExtensionApplication
    {
        private readonly IHost _host;

        public Program()
        {
            try
            {
                _host = CreateHostBuilder().Build();
                _host.Start();
            }
            catch (Exception exception)
            {
                Log.Error(exception, exception.Message);
            }

        }

        public void Initialize()
        {
        }

        public void Terminate()
        {
        }

        [AcRnt.CommandMethod("pm", AcRnt.CommandFlags.Session)]
        public void ProgramMethod()
        {
            var lc = _host.Services.GetRequiredService<LuminaireController>();
            lc.ControllerMethod();
        }

        private IHostBuilder CreateHostBuilder(string[] args = null)
        {
            /*return Host.CreateDefaultBuilder(args)
                .AddApi()
                .AddPersistence()
                .AddApplication()
                ;*/

            var c = Host.CreateDefaultBuilder(args);
            c.AddApi();
            c.AddPersistence();
            c.AddApplication();
            return c;
        }

    }
}
