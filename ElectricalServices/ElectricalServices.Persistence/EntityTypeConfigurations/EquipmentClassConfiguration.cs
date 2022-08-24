using ElectricalServices.Domain.Lighting;
using System.Data.Entity.ModelConfiguration;

namespace ElectricalServices.Persistence.EntityTypeConfigurations
{
    public class EquipmentClassConfiguration : EntityTypeConfiguration<EquipmentClass>
    {
        public EquipmentClassConfiguration()
        {
            HasMany(ec => ec.LightingFixtures).WithRequired(lf => lf.EquipmentClass);
            Property(ec => ec.Value).IsRequired();
        }
    }
}
