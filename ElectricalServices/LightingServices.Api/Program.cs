using System;
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
                var json = stj.JsonSerializer.Deserialize<LuminairesPage>(jsonArgs);
                //jsonArgs = @"{'Page':'1', 'PageSize': '5'}";
                //jsonArgs = "{\"Page\":\"1\", \"PageSize\": \"5\"}";
                jsonArgs = "{\\\"Page\\\":\\\"1\\\",\\\"PageSize\\\":\\\"5\\\"}";
                LuminairesPage luminaire = JsonConvert.DeserializeObject<LuminairesPage>(jsonArgs);
                //dynamic luminaire = JsonConvert.DeserializeObject(jsonArgs);
                int.TryParse(luminaire.PageSize, out int pageSize);
                int.TryParse(luminaire.Page, out int page);

                /*var definition = new { Name = "" };

                string json1 = @"{'Name':'James'}";
                var customer1 = JsonConvert.DeserializeAnonymousType(json1, definition);

                var luminaire = JsonConvert.DeserializeAnonymousType(jsonArgs, new { page = "", pageSize = "" });
                int.TryParse(luminaire.pageSize, out int pageSize);
                int.TryParse(luminaire.page, out int page);*/
                /*var host = CreateHostBuilder().Build();
                host.Start();*/
                //var res1 = _host?.Services.GetRequiredService<LuminaireController>();
                //res = _host.Services.GetRequiredService<LuminaireController>().GetAll(pageSize, page);
                res = _host.Services.GetRequiredService<LuminaireController>().GetAll(pageSize, page);
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
