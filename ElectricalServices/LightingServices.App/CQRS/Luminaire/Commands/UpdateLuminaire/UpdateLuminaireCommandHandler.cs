using ElectricalServices.Domain.Lighting;
using LightingServices.App.Common.Exceptions;
using LightingServices.App.Interfaces;
using MediatR;
using System.Data.Entity;
using System.Threading;
using System.Threading.Tasks;

namespace LightingServices.App.CQRS.Luminaire.Commands.UpdateLuminaire
{
    public class UpdateLuminaireCommandHandler : IRequestHandler<UpdateLuminaireCommand>
    {
        private readonly ILightingDbContext _dbContext;

        public UpdateLuminaireCommandHandler(ILightingDbContext dbContext) =>
            _dbContext = dbContext;

        public async Task<Unit> Handle(UpdateLuminaireCommand request,
            CancellationToken cancellationToken)
        {
            var entity =
                await _dbContext.LightingFixtures.FirstOrDefaultAsync(lf =>
                    lf.Id == request.Luminaire.Id, cancellationToken);

            if (entity == null || entity.Id != request.Luminaire.Id)
            {
                throw new NotFoundException(nameof(LightingFixture), request.Luminaire.Id);
            }

            //!!!!!!!!!!!!!!!!Написать логику апдейта светильника!!!!!!!!!!!!!!!!!!!!!!!!

            /*entity.Brand = request.Brand;
            entity.LdtIesFile = request.LdtIesFile;*/

            await _dbContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}
