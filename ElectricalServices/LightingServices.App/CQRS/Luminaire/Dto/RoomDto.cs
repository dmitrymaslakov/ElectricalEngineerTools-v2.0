using AutoMapper;
using ElectricalServices.Domain.Lighting;
using LightingServices.App.Common.Mapping;

namespace LightingServices.App.CQRS.Luminaire.Dto
{
    public class RoomDto
    {
        public int LuminaireId { get; set; }
        public double LuminousFlux { get; set; }
        public double SafetyFactor { get; set; }
        public double Area { get; set; }
        public int NumberAlongX { get; set; }
        public int NumberAlongY { get; set; }
        public double WorkingSurfaceHeight { get; set; }
        public double MountingHeight { get; set; }
        public string PcPwPws { get; set; }
        public double Length { get; set; }
        public double Width { get; set; }
    }
}
