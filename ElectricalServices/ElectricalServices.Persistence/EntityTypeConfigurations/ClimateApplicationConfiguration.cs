using ElectricalServices.Domain.Lighting;
using System.Data.Entity.ModelConfiguration;

namespace ElectricalServices.Persistence.EntityTypeConfigurations
{
    public class ClimateApplicationConfiguration : EntityTypeConfiguration<ClimateApplication>
    {
        public ClimateApplicationConfiguration()
        {
            HasMany(ca => ca.LightingFixtures).WithRequired(lf => lf.ClimateApplication);
            Property(ca => ca.Value).IsRequired();
        }
    }
}
