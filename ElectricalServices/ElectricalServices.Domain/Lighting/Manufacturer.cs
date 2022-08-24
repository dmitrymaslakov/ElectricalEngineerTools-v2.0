using ElectricalServices.Domain.Abstract;
using System.Collections.Generic;

namespace ElectricalServices.Domain.Lighting
{
    public class Manufacturer : BaseEntity
    {
        public Manufacturer()
        {
            LightingFixtures = new HashSet<LightingFixture>();
        }
        public string Name { get; set; }
        public virtual ICollection<LightingFixture> LightingFixtures { get; set; }
    }
}
