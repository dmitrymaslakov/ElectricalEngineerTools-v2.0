using ElectricalServices.Domain.Lighting;
using System.Data.Entity.ModelConfiguration;

namespace ElectricalServices.Persistence.EntityTypeConfigurations
{
    public class DiffuserMaterialConfiguration : EntityTypeConfiguration<DiffuserMaterial>
    {
        public DiffuserMaterialConfiguration()
        {
            HasMany(dm => dm.LightingFixtures).WithRequired(lf => lf.DiffuserMaterial);
            Property(dm => dm.Description).IsRequired();
        }
    }
}
