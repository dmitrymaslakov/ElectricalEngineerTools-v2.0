using AutoMapper;

namespace LightingServices.App.Common.Mapping
{
    public interface IMapWith<T>
    {
        void Mapping(Profile profile);
    }
}
