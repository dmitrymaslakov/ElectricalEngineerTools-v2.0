using AutoMapper;
using AutoMapper.QueryableExtensions;
using LightingServices.App.CQRS.Luminaire.Queries.GetLuminaireList;
using LightingServices.App.Interfaces;
using MediatR;
using System.Data.Entity;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace LightingServices.App.CQRS.Luminaire.Queries.GetLuminaireDetails
{
    public class GetLuminaireListQueryHandler : IRequestHandler<GetLuminaireListQuery, LuminaireListVm>
    {
        private readonly ILightingDbContext _dbContext;
        private readonly IMapper _mapper;

        public GetLuminaireListQueryHandler(ILightingDbContext dbContext,
            IMapper mapper) => (_dbContext, _mapper) = (dbContext, mapper);

        public async Task<LuminaireListVm> Handle(GetLuminaireListQuery request,
            CancellationToken cancellationToken)
        {
            var luminaireQuery = await _dbContext.LightingFixtures
                .Where(lf => lf.Id == request.Id)
                .ProjectTo<LuminaireLookupDto>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

            return new LuminaireListVm { Luminaires = luminaireQuery };
        }
    }
}
