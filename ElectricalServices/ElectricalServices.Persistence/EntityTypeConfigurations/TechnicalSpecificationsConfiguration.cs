using ElectricalServices.Domain.Lighting;
using System.Data.Entity.ModelConfiguration;

namespace ElectricalServices.Persistence.EntityTypeConfigurations
{
    public class TechnicalSpecificationsConfiguration : EntityTypeConfiguration<TechnicalSpecifications>
    {
        public TechnicalSpecificationsConfiguration()
        {
            HasMany(ts => ts.LightingFixtures).WithRequired(lf => lf.TechnicalSpecifications);
            Property(m => m.Number).IsRequired();
        }
    }
}
