using ElectricalServices.Domain.Abstract;
using System.Collections.Generic;

namespace ElectricalServices.Domain.Lighting
{
    public class DiffuserMaterial : BaseEntity
    {
        public DiffuserMaterial()
        {
            LightingFixtures = new HashSet<LightingFixture>();
        }

        public string Description { get; set; }
        public virtual ICollection<LightingFixture> LightingFixtures { get; set; }
    }
}
