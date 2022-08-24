using ElectricalServices.Domain.Lighting;
using System.Data.Entity.ModelConfiguration;

namespace ElectricalServices.Persistence.EntityTypeConfigurations
{
    public class LightSourceInfoConfiguration : EntityTypeConfiguration<LightSourceInfo>
    {
        public LightSourceInfoConfiguration()
        {
            HasMany(lsi => lsi.LightingFixtures).WithRequired(lf => lf.LightSourceInfo);
            Property(lsi => lsi.Power).IsRequired();
            Property(lsi => lsi.LightSourceType).IsRequired();
            Ignore(lsi => lsi.FullDescription);
        }
    }
}
