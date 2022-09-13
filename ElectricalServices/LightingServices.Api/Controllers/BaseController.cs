using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LightingServices.Api.Controllers
{
    public abstract class BaseController
    {
        protected readonly IMediator _mediator;
        protected readonly IMapper _mapper;

        public BaseController(IMediator mediator, IMapper mapper)
        {
            _mediator = mediator;
            _mapper = mapper;
        }
    }
}
