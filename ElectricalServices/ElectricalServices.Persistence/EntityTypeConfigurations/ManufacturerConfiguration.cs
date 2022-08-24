using ElectricalServices.Domain.Lighting;
using System.Data.Entity.ModelConfiguration;

namespace ElectricalServices.Persistence.EntityTypeConfigurations
{
    public class ManufacturerConfiguration : EntityTypeConfiguration<Manufacturer>
    {
        public ManufacturerConfiguration()
        {
            HasMany(m => m.LightingFixtures).WithRequired(lf => lf.Manufacturer);
            Property(m => m.Name).IsRequired();
        }
    }
}
