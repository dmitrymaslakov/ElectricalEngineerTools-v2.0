using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace LightingServices.App.CQRS.Luminaire.Dto
{
    public class ChangedLuminaire
    {
        public int Id { get; set; }
        [JsonExtensionData]
        public IDictionary<string, JToken> ChangedParameters { get; set; }
    }
}
