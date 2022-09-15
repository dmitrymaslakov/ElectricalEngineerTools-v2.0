using AutoMapper;
using ElectricalServices.Domain.Lighting;
using LightingServices.App.Common.Exceptions;
using LightingServices.App.Interfaces;
using MediatR;
using System.Data.Entity;
using System.Threading;
using System.Threading.Tasks;

namespace LightingServices.App.CQRS.Luminaire.Queries.GetLuminaireDetails
{
    public class GetLuminaireDetailsQueryHandler : IRequestHandler<GetLuminaireDetailsQuery, LuminaireDetailsVm>
    {
        private readonly ILightingDbContext _dbContext;
        private readonly IMapper _mapper;

        public GetLuminaireDetailsQueryHandler(ILightingDbContext dbContext,
            IMapper mapper) => (_dbContext, _mapper) = (dbContext, mapper);

        public async Task<LuminaireDetailsVm> Handle(GetLuminaireDetailsQuery request,
            CancellationToken cancellationToken)
        {
            var entity = await _dbContext.LightingFixtures
                .FirstOrDefaultAsync(lf => lf.Id == request.Id);

            if (entity == null || entity.Id != request.Id)
            {
                throw new NotFoundException(nameof(LightingFixture), request.Id);
            }

            return _mapper.Map<LuminaireDetailsVm>(entity);
        }
    }
}
