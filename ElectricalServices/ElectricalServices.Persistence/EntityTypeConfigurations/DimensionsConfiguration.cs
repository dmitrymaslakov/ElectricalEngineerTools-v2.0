using ElectricalServices.Domain.Lighting;
using System.Data.Entity.ModelConfiguration;

namespace ElectricalServices.Persistence.EntityTypeConfigurations
{
    public class DimensionsConfiguration : EntityTypeConfiguration<Dimensions>
    {
        public DimensionsConfiguration()
        {
            HasMany(d => d.LightingFixtures).WithRequired(lf => lf.Dimensions);
            Ignore(d => d.RealDimensions);
            Ignore(d => d.DimensionsOnDwg);
        }
    }
}
