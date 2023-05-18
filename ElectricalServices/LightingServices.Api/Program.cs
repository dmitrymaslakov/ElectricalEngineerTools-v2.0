using System;
using System.Text.RegularExpressions;
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
using System.Security.Policy;
using static System.Net.Mime.MediaTypeNames;
using Autodesk.AutoCAD.GraphicsInterface;

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

        /*[AcRnt.CommandMethod("pm", AcRnt.CommandFlags.Session)]
        public void ProgramMethod()
        {
            var lc = _host.Services.GetRequiredService<LuminaireController>();
            lc.ControllerMethod();
        }*/

        [AcRnt.JavaScriptCallback("AsyncOperation")]
        public string AsyncOperation(string jsonArgs)
        {
            try
            {

                jsonArgs = jsonArgs
                    .Substring(1)
                    .Substring(0, jsonArgs.Length - 3);

                var bytes = Convert.FromBase64String(jsonArgs);
                var str = Encoding.UTF8.GetString(bytes);

                string json = JsonConvert.SerializeObject(
                    new
                    {
                        retCode = 0,
                        retErrorString = "Maslakov"
                        /*retValue = new double[] { 10, 20 }*/
                    });
                return json;
            }
            catch (Exception e)
            {
                return "";
            }
        }


        [AcRnt.JavaScriptCallback("DetermineRoomDimensions")]
        public string DetermineRoomDimensions(string jsonArgs)
        {
            string res = _host.Services.GetRequiredService<RoomController>().DetermineRoomDimensions();
            return res;
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

        [AcRnt.JavaScriptCallback("UpdateLuminaire")]
        public string UpdateLuminaire(string jsonArgs)
        {
            string res = "";
            try
            {
                jsonArgs = jsonArgs
                    .Substring(1)
                    .Substring(0, jsonArgs.Length - 3);

                var bytes = Convert.FromBase64String(jsonArgs);
                var str = Encoding.UTF8.GetString(bytes);

                var changedLum = JsonConvert.DeserializeObject<ChangedLuminaireDto>(str);

                res = _host.Services.GetRequiredService<LuminaireController>().ChangeLuminaire(changedLum);
                return res;
            }
            catch (Exception exception)
            {
                Log.Error(exception, exception.Message);
                return res;
            }
        }

        [AcRnt.JavaScriptCallback("CalculateIlluminance")]
        public string CalculateIlluminance(string jsonArgs)
        {
            string res = "";

            try
            {
                jsonArgs = jsonArgs
                    .Substring(jsonArgs.IndexOf("{"))
                    .Substring(0, jsonArgs.LastIndexOf("}"));

                jsonArgs = Regex.Replace(jsonArgs, @"\\", "");

                var room = JsonConvert.DeserializeObject<RoomDto>(jsonArgs);
                res = _host.Services.GetRequiredService<LuminaireController>().CalculateIlluminance(room);

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
