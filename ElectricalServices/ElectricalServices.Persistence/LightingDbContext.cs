using ElectricalServices.Domain.Lighting;
using ElectricalServices.Persistence.EntityTypeConfigurations;
using LightingServices.App.Interfaces;
using MySql.Data.EntityFramework;
using System.Data.Common;
using System.Data.Entity;

namespace ElectricalServices.Persistence
{
    [DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class LightingDbContext : DbContext, ILightingDbContext
    {
        public LightingDbContext(string connectionString) : base(connectionString)
        {

        }
        public LightingDbContext(DbConnection existingConnection, bool contextOwnsConnection)
            : base(existingConnection, contextOwnsConnection)
        {

        }

        public DbSet<LightingFixture> LightingFixtures { get; set; }
        public DbSet<Manufacturer> Manufacturers { get; set; }
        public DbSet<TechnicalSpecifications> TechnicalSpecifications { get; set; }
        public DbSet<Mounting> Mountings { get; set; }
        public DbSet<ClimateApplication> ClimateApplications { get; set; }
        public DbSet<DiffuserMaterial> DiffuserMaterials { get; set; }
        public DbSet<IngressProtection> IngressProtections { get; set; }
        public DbSet<EquipmentClass> EquipmentClasses { get; set; }
        public DbSet<LightSourceInfo> LightSourceInfoes { get; set; }
        public DbSet<Dimensions> Dimensions { get; set; }
        public DbSet<Cable> Cables { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new CableConfiguration());
            modelBuilder.Configurations.Add(new ClimateApplicationConfiguration());
            modelBuilder.Configurations.Add(new DiffuserMaterialConfiguration());
            modelBuilder.Configurations.Add(new DimensionsConfiguration());
            modelBuilder.Configurations.Add(new EquipmentClassConfiguration());
            modelBuilder.Configurations.Add(new IngressProtectionConfiguration());
            modelBuilder.Configurations.Add(new LightingFixtureConfiguration());
            modelBuilder.Configurations.Add(new LightSourceInfoConfiguration());
            modelBuilder.Configurations.Add(new ManufacturerConfiguration());
            modelBuilder.Configurations.Add(new MountingConfiguration());
            modelBuilder.Configurations.Add(new TechnicalSpecificationsConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
