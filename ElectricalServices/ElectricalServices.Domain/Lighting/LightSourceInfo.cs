using ElectricalServices.Domain.Abstract;
using System.Collections.Generic;

namespace ElectricalServices.Domain.Lighting
{
    public class LightSourceInfo : BaseEntity
    {
        public LightSourceInfo()
        {
            LightingFixtures = new HashSet<LightingFixture>();
        }

        public string Power { get; set; }
        public string LightSourceType { get; set; }
        public string Socle { get; set; }
        public int? LampsNumber { get; set; }
        public string FullDescription
        {
            get
            {
                return Socle == null
                    ? $"{LightSourceType} {Power} Вт"
                    : $"{LightSourceType} {Power} Вт цоколь {Socle} ({LampsNumber}шт.)";
            }
        }

        public virtual ICollection<LightingFixture> LightingFixtures { get; set; }
    }
}
