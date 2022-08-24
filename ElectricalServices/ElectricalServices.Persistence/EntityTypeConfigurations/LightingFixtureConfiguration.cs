using ElectricalServices.Domain.Lighting;
using System.Data.Entity.ModelConfiguration;

namespace ElectricalServices.Persistence.EntityTypeConfigurations
{
    public class LightingFixtureConfiguration : EntityTypeConfiguration<LightingFixture>
    {
        public LightingFixtureConfiguration()
        {
            Property(lf => lf.Brand).IsRequired();
            Property(lf => lf.IsFireproof).IsRequired();
            Property(lf => lf.IsExplosionProof).IsRequired();
            Property(lf => lf.BPSU).IsRequired();
            Property(lf => lf.LdtIesFile).IsRequired();
        }
    }
}
