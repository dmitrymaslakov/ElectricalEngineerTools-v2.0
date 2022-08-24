using ElectricalServices.Domain.Abstract;
using System.Collections.Generic;

namespace ElectricalServices.Domain.Lighting
{
    public class IngressProtection : BaseEntity
    {
        public IngressProtection()
        {
            LightingFixtures = new HashSet<LightingFixture>();
        }

        public int Value { get; set; }
        public virtual ICollection<LightingFixture> LightingFixtures { get; set; }
    }
}
