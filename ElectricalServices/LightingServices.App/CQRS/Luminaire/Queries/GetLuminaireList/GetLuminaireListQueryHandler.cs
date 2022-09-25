using AutoMapper;
using AutoMapper.QueryableExtensions;
using LightingServices.App.Common.Pading;
using LightingServices.App.CQRS.Luminaire.Dto;
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
            var luminaireQuery = _dbContext.LightingFixtures.ProjectTo<LuminaireDto>(_mapper.ConfigurationProvider);

            var count = await luminaireQuery.CountAsync();
            var luminaires = await luminaireQuery
                .OrderBy(l => l.Manufacturer)
                .Skip((request.Page - 1) * request.PageSize)
                .Take(request.PageSize)
                .ToListAsync(cancellationToken);

            var pageViewModel = new PageViewModel(count, request.Page, request.PageSize);
            var viewModel = new IndexViewModel<LuminaireDto>
            {
                PageViewModel = pageViewModel,
                Entities = luminaires
            };

            return new LuminaireListVm { Luminaires = viewModel };
        }
    }
}
