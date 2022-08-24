using ElectricalServices.Domain.Lighting;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LightingServices.App.Interfaces
{
    public interface ILightingDbContext
    {
        DbSet<LightingFixture> LightingFixtures { get; set; }
        DbSet<Manufacturer> Manufacturers { get; set; }
        DbSet<TechnicalSpecifications> TechnicalSpecifications { get; set; }
        DbSet<Mounting> Mountings { get; set; }
        DbSet<ClimateApplication> ClimateApplications { get; set; }
        DbSet<DiffuserMaterial> DiffuserMaterials { get; set; }
        DbSet<IngressProtection> IngressProtections { get; set; }
        DbSet<EquipmentClass> EquipmentClasses { get; set; }
        DbSet<LightSourceInfo> LightSourceInfoes { get; set; }
        DbSet<Dimensions> Dimensions { get; set; }
        DbSet<Cable> Cables { get; set; }

        Task<int> SaveChangesAsync();
    }
}
