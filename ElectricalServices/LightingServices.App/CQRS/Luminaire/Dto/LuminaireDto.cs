namespace LightingServices.App.CQRS.Luminaire.Dto
{
    public class LuminaireDto
    {
        public int Id { get; set; }
        public string Manufacturer { get; set; }
        public string Brand { get; set; }
        public LightSourceInfoDto LightSourceInfo { get; set; }
        public string TechnicalSpecifications { get; set; }
        public MountingDto Mounting { get; set; }
        public string ClimateApplication { get; set; }
        public string DiffuserMaterial { get; set; }
        public int IP { get; set; }
        public string EquipmentClass { get; set; }
        public bool IsFireproof { get; set; }
        public bool IsExplosionProof { get; set; }
        public bool BPSU { get; set; }
        public DimensionsDto Dimensions { get; set; }
        public string LdtIesFile { get; set; }
        public CableDto Cable { get; set; }
    }
}