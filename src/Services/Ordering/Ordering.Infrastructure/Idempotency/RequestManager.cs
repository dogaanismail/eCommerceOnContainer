﻿namespace Microsoft.eCommerceOnContainers.Services.Ordering.Infrastructure.Idempotency;

public class RequestManager : IRequestManager
{
    #region Fields
    private readonly OrderingContext _context;

    #endregion

    #region Ctor

    public RequestManager(OrderingContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    #endregion

    #region Methods

    public async Task<bool> ExistAsync(Guid id)
    {
        var request = await _context.FindAsync<ClientRequest>(id);

        return request != null;
    }

    public async Task CreateRequestForCommandAsync<T>(Guid id)
    {
        var exists = await ExistAsync(id);

        var request = exists ? throw new OrderingDomainException($"Request with {id} already exists") :
            new ClientRequest()
            {
                Id = id,
                Name = typeof(T).Name,
                Time = DateTime.UtcNow
            };

        _context.Add(request);

        await _context.SaveChangesAsync();
    }

    #endregion
}
