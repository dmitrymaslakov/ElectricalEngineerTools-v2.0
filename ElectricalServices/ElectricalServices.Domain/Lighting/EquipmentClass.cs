using ElectricalServices.Domain.Abstract;
using System.Collections.Generic;

namespace ElectricalServices.Domain.Lighting
{
    public class EquipmentClass : BaseEntity
    {
        public EquipmentClass()
        {
            LightingFixtures = new HashSet<LightingFixture>();
        }
        public string Value { get; set; }
        public virtual ICollection<LightingFixture> LightingFixtures { get; set; }
    }
}
