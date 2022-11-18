using AutoMapper;
using LightingServices.App.CQRS.Luminaire.Commands.CreateLuminaire;
using LightingServices.App.CQRS.Luminaire.Commands.UpdateLuminaire;
using LightingServices.App.CQRS.Luminaire.Dto;
using LightingServices.App.CQRS.Luminaire.Queries.GetLuminaireDetails;
using LightingServices.App.CQRS.Luminaire.Queries.GetLuminaireList;
using LightingServices.App.Interfaces;
using MediatR;
using Newtonsoft.Json;
using Serilog;
using System;
using System.Text;
using System.Threading.Tasks;
using AcRnt = Autodesk.AutoCAD.Runtime;


namespace LightingServices.Api.Controllers
{
    public class LuminaireController : BaseController
    {
        private readonly ILightingDbContext _dbContext;

        public LuminaireController(IMediator mediator, IMapper mapper, ILightingDbContext dbContext)
            : base(mediator, mapper)
        {
            try
            {
                _dbContext = dbContext;
            }
            catch (System.Exception exception)
            {
                Log.Error(exception, exception.Message);
            }
        }

        public string GetAll(int pageSize, int pageNumber)
        {
            var query = new GetLuminaireListQuery { Page = pageNumber, PageSize = pageSize };
            var vm = _mediator.Send(query).Result;
            var json = returnAsJSON(vm);
            return json;
        }

        public string ChangeLuminaire(ChangedLuminaire changedLum)
        {
            var command = new UpdateLuminaireCommand { ChangedLuminaire = changedLum };
            var vm = _mediator.Send(command).Result;
            var json = returnAsJSON(vm);
            return json;
        }

        private string returnAsJSON(object vm)
        {
            byte[] vmBytes = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(vm));
            string vmString = Convert.ToBase64String(vmBytes);

            return JsonConvert.SerializeObject(
                    new
                    {
                        retCode = 0,
                        retValue = vmString
                    });
        }

        [AcRnt.JavaScriptCallback("Get")]
        //public async Task<LuminaireDetailsVm> Get(int id)
        public string Get(string id)
        {
            int idDto = JsonConvert.DeserializeObject<int>(id);

            var query = new GetLuminaireDetailsQuery
            {
                Id = idDto
            };
            //var vm = await _mediator.Send(query);
            var vm = _mediator.Send(query).Result;
            string json = JsonConvert.SerializeObject(
                    new
                    {
                        retCode = 0,
                        retValue = vm
                    });
            return json;
        }

        [AcRnt.JavaScriptCallback("Create")]
        public string Create(string jsonArgs)
        {
            var luminaire = JsonConvert.DeserializeObject<LuminaireDto>(jsonArgs);
            var vm = _mediator.Send(new CreateLuminaireCommand { Luminaire = luminaire }).Result;

            string json = JsonConvert.SerializeObject(
                    new
                    {
                        retCode = 0,
                        retValue = vm
                    });
            return json;
        }

        public void ControllerMethod()
        {
            var res = _mediator.Send(new GetLuminaireDetailsQuery { Id = 1 });
            var vm = res.Result;
        }
    }
}
