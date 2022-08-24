using ElectricalServices.Domain.Abstract;
using System.Collections.Generic;

namespace ElectricalServices.Domain.Lighting
{
    public class Mounting : BaseEntity
    {
        public Mounting()
        {
            LightingFixtures = new HashSet<LightingFixture>();
        }

        public string MountingType { get; set; }
        public string MountingSubtype { get; set; }
        public string FullDescription
        {
            get
            {
                return $"{MountingType} {MountingSubtype}";
            }
        }

        public virtual ICollection<LightingFixture> LightingFixtures { get; set; }
    }
}
