using ElectricalServices.Domain.Lighting;
using System.Data.Entity.ModelConfiguration;

namespace ElectricalServices.Persistence.EntityTypeConfigurations
{
    public class IngressProtectionConfiguration : EntityTypeConfiguration<IngressProtection>
    {
        public IngressProtectionConfiguration()
        {
            HasMany(ip => ip.LightingFixtures).WithRequired(lf => lf.IP);
            Property(ip => ip.Value).IsRequired();
        }
    }
}
