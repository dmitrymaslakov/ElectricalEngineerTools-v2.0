using ElectricalServices.Domain.Lighting;
using LightingServices.App.Common.Exceptions;
using LightingServices.App.Interfaces;
using MediatR;
using System.Data.Entity;
using System.Threading;
using System.Threading.Tasks;

namespace LightingServices.App.CQRS.Luminaire.Commands.DeleteLuminaire
{
    public class DeleteLuminaireCommandHandler : IRequestHandler<DeleteLuminaireCommand>
    {
        private readonly ILightingDbContext _dbContext;

        public DeleteLuminaireCommandHandler(ILightingDbContext dbContext) =>
            _dbContext = dbContext;

        public async Task<Unit> Handle(DeleteLuminaireCommand request,
            CancellationToken cancellationToken)
        {
            var entity =
                await _dbContext.LightingFixtures.FindAsync(new object[] { request.Id }, cancellationToken);

            if (entity == null || entity.Id != request.Id)
            {
                throw new NotFoundException(nameof(LightingFixture), request.Id);
            }

            _dbContext.LightingFixtures.Remove(entity);

            await _dbContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}
