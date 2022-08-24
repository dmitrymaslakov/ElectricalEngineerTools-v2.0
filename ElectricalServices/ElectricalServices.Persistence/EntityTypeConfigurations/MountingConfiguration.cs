using ElectricalServices.Domain.Lighting;
using System.Data.Entity.ModelConfiguration;

namespace ElectricalServices.Persistence.EntityTypeConfigurations
{
    public class MountingConfiguration : EntityTypeConfiguration<Mounting>
    {
        public MountingConfiguration()
        {
            HasMany(m => m.LightingFixtures).WithRequired(lf => lf.Mounting);
            Property(m => m.MountingType).IsRequired();
            Property(m => m.MountingSubtype).IsRequired();
            Ignore(m => m.FullDescription);
        }
    }
}
