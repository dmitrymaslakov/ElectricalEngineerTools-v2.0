using AutoMapper;
using LightingServices.App.CQRS.Luminaire.Commands.CreateLuminaire;
using LightingServices.App.CQRS.Luminaire.Dto;
using LightingServices.App.CQRS.Luminaire.Queries.GetLuminaireDetails;
using LightingServices.App.CQRS.Luminaire.Queries.GetLuminaireList;
using LightingServices.App.Interfaces;
using MediatR;
using Newtonsoft.Json;
using System.Threading.Tasks;
using AcRnt = Autodesk.AutoCAD.Runtime;

[assembly: AcRnt.CommandClass(typeof(LightingServices.Api.Controllers.LuminaireController))]

namespace LightingServices.Api.Controllers
{
    public class LuminaireController : BaseController
    {
        private readonly ILightingDbContext _dbContext;

        public LuminaireController(IMediator mediator, IMapper mapper, ILightingDbContext dbContext)
            : base(mediator, mapper)
        {
            _dbContext = dbContext;
        }

        public async Task<LuminaireListVm> GetAll()
        {
            var query = new GetLuminaireListQuery();
            var vm = await _mediator.Send(query);
            return vm;
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

        [AcRnt.CommandMethod("qwРасчетОсвещенностиПомещения", AcRnt.CommandFlags.Session)]
        public void Method()
        {

        }
    }
}
