using ElectricalServices.Domain.Abstract;
using System.Collections.Generic;

namespace ElectricalServices.Domain.Lighting
{
    public class TechnicalSpecifications : BaseEntity
    {
        public TechnicalSpecifications()
        {
            LightingFixtures = new HashSet<LightingFixture>();
        }
        public string Number { get; set; }
        public virtual ICollection<LightingFixture> LightingFixtures { get; set; }
    }
}
