using ElectricalServices.Domain.Abstract;
using System.Collections.Generic;
using System.Text;

namespace ElectricalServices.Domain.Lighting
{
    public class Dimensions : BaseEntity
    {
        public Dimensions()
        {
            LightingFixtures = new HashSet<LightingFixture>();
        }

        public double? Length { get; set; }
        public double? Width { get; set; }
        public double? Diameter { get; set; }
        public double? LengthOnDwg { get; set; }
        public double? WidthOnDwg { get; set; }
        public double? DiameterOnDwg { get; set; }
        public string RealDimensions
        {
            get
            {
                var dimensions = new StringBuilder();

                if (Length != null && Width != null)
                {
                    dimensions.Append($"{Length}х{Width}");
                }
                else if (Diameter != null)
                {
                    dimensions.Append($"Ø{Diameter}");
                }
                return dimensions.ToString();
            }
        }
        public string DimensionsOnDwg
        {
            get
            {
                var dimensions = new StringBuilder();

                if (LengthOnDwg != null && WidthOnDwg != null)
                {
                    dimensions.Append($"{LengthOnDwg}х{WidthOnDwg}");
                }
                else if (DiameterOnDwg != null)
                {
                    dimensions.Append($"Ø{DiameterOnDwg}");
                }
                return dimensions.ToString();
            }
        }

        public virtual ICollection<LightingFixture> LightingFixtures { get; set; }
    }
}
