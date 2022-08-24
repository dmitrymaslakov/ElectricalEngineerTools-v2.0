using ElectricalServices.Domain.Abstract;
using System.Collections.Generic;

namespace ElectricalServices.Domain.Lighting
{
    public class ClimateApplication : BaseEntity
    {
        public ClimateApplication()
        {
            LightingFixtures = new HashSet<LightingFixture>();
        }

        public string Value { get; set; }
        public virtual ICollection<LightingFixture> LightingFixtures { get; set; }
    }
}
