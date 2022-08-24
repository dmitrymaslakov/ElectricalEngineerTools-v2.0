using ElectricalServices.Domain.Abstract;

namespace ElectricalServices.Domain.Lighting
{
    public class LightingFixture : BaseEntity
    {
        public virtual Manufacturer Manufacturer { get; set; }
        public int ManufacturerId { get; set; }
        public string Brand { get; set; }
        public virtual LightSourceInfo LightSourceInfo { get; set; }
        public int LightSourceInfoId { get; set; }
        public virtual TechnicalSpecifications TechnicalSpecifications { get; set; }
        public int? TechnicalSpecificationsId { get; set; }
        public virtual Mounting Mounting { get; set; }
        public int MountingId { get; set; }
        public virtual ClimateApplication ClimateApplication { get; set; }
        public int ClimateApplicationId { get; set; }
        public virtual DiffuserMaterial DiffuserMaterial { get; set; }
        public int DiffuserMaterialId { get; set; }
        public virtual IngressProtection IP { get; set; }
        public int IPId { get; set; }
        public EquipmentClass EquipmentClass { get; set; }
        public int EquipmentClassId { get; set; }
        public bool IsFireproof { get; set; }
        public bool IsExplosionProof { get; set; }
        public bool BPSU { get; set; }
        public virtual Dimensions Dimensions { get; set; }
        public int DimensionsId { get; set; }
        public string LdtIesFile { get; set; }
        public virtual Cable Cable { get; set; }
        public int? CableId { get; set; }
    }
}
