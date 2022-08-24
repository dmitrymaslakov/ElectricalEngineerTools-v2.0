using ElectricalServices.Domain.Abstract;
using System.Collections.Generic;

namespace ElectricalServices.Domain.Lighting
{
    public class Cable : BaseEntity
    {
        public Cable()
        {
            LightingFixtures = new HashSet<LightingFixture>();
        }
        public string Brand { get; set; }
        public int CoresNumber { get; set; }
        public double Section { get; set; }
        public virtual ICollection<LightingFixture> LightingFixtures { get; set; }
        public string FullName
        {
            get
            {
                return $"{Brand} {CoresNumber}х{Section}";
            }
        }
    }
}
