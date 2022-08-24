using ElectricalServices.Domain.Lighting;
using System.Data.Entity.ModelConfiguration;

namespace ElectricalServices.Persistence.EntityTypeConfigurations
{
    public class CableConfiguration : EntityTypeConfiguration<Cable>
    {
        public CableConfiguration()
        {
            HasMany(c => c.LightingFixtures).WithRequired(lf => lf.Cable);
            Property(c => c.Brand).IsRequired();
            Property(c => c.CoresNumber).IsRequired();
            Property(c => c.Section).IsRequired();
            Ignore(c => c.FullName);
        }
    }
}
