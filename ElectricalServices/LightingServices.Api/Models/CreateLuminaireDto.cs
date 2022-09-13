using AutoMapper;
using LightingServices.App.Common.Mapping;
using LightingServices.App.CQRS.Luminaire.Commands.CreateLuminaire;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LightingServices.Api.Models
{
    public class CreateLuminaireDto : IMapWith<CreateLuminaireCommand>
    {
        public void Mapping(Profile profile)
        {
            throw new NotImplementedException();
        }
    }
}
