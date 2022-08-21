using ElectricalServices.Domain.Abstract;

namespace ElectricalServices.Domain.Lighting
{
    public class Luminaire : BaseEntity
    {
        public string Manufacturer { get; set; }
        public string Brand { get; set; }
        public string LightSourceInfo { get; set; }
        public string TechnicalSpecifications { get; set; }
        public string Mounting { get; set; }
        public string ClimateApplication { get; set; }
        public string DiffuserMaterial { get; set; }
        public int IP { get; set; }
        public string EquipmentClass { get; set; }
        public bool IsFireproof { get; set; }
        public bool IsExplosionProof { get; set; }
        public bool BPSU { get; set; }
        public string Dimensions { get; set; }
        public string LdtIesFile { get; set; }
    }
}
