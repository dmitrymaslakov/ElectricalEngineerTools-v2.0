using System;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using stj = System.Text.Json;
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
using LightingServices.App.CQRS.Luminaire.Dto;

[assembly: AcRnt.ExtensionApplication(typeof(LightingServices.Api.Program))]
//[assembly: AcRnt.CommandClass(typeof(LightingServices.Api.Controllers.LuminaireController))]
[assembly: AcRnt.CommandClass(typeof(LightingServices.Api.Program))]

namespace LightingServices.Api
{
    public sealed class Program : AcRnt.IExtensionApplication
    {
        private static IHost _host;

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

        [AcRnt.CommandMethod("pm", AcRnt.CommandFlags.Session)]
        public void ProgramMethod()
        {
            var lc = _host.Services.GetRequiredService<LuminaireController>();
            lc.ControllerMethod();
        }

        //[AcRnt.CommandMethod("GetAll", AcRnt.CommandFlags.Session)]
        [AcRnt.JavaScriptCallback("GetPage")]
        public string GetPageLuminaire(string jsonArgs)
        //public void GetAll()
        {
            string res = "";
            try
            {
                jsonArgs = jsonArgs
                    .Substring(jsonArgs.IndexOf("{"))
                    .Substring(0, jsonArgs.LastIndexOf("}"));

                jsonArgs = Regex.Replace(jsonArgs, @"\\", "");

                var luminaire = JsonConvert.DeserializeAnonymousType(jsonArgs, new { Page = 0, PageSize = 0 });

                res = _host.Services.GetRequiredService<LuminaireController>().GetAll(luminaire.PageSize, luminaire.Page);
                return res;
            }
            catch (Exception exception)
            {
                Log.Error(exception, exception.Message);
                return res;
            }
        }


        private IHostBuilder CreateHostBuilder(string[] args = null)
        {
            return Host.CreateDefaultBuilder(args)
                .AddApi()
                .AddPersistence()
                .AddApplication();
        }

        public void Initialize()
        {
        }

        public void Terminate()
        {
        }
    }
}
