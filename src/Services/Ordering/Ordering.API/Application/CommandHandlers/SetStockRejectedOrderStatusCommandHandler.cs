﻿namespace Microsoft.eCommerceOnContainers.Services.Ordering.API.Application.Commands;

// Regular CommandHandler
public class SetStockRejectedOrderStatusCommandHandler : IRequestHandler<SetStockRejectedOrderStatusCommand, bool>
{
    #region Fields
    private readonly IOrderRepository _orderRepository;

    #endregion

    #region Ctor

    public SetStockRejectedOrderStatusCommandHandler(IOrderRepository orderRepository)
    {
        _orderRepository = orderRepository;
    }

    #endregion

    #region Handle Method

    /// <summary>
    /// Handler which processes the command when
    /// Stock service rejects the request
    /// </summary>
    /// <param name="command"></param>
    /// <returns></returns>
    public async Task<bool> Handle(SetStockRejectedOrderStatusCommand command, CancellationToken cancellationToken)
    {
        // Simulate a work time for rejecting the stock
        await Task.Delay(10000, cancellationToken);

        var orderToUpdate = await _orderRepository.GetAsync(command.OrderNumber);

        if (orderToUpdate == null)
            return false;
        

        orderToUpdate.SetCancelledStatusWhenStockIsRejected(command.OrderStockItems);

        return await _orderRepository.UnitOfWork.SaveEntitiesAsync(cancellationToken);
    }

    #endregion
}


// Use for Idempotency in Command process
public class SetStockRejectedOrderStatusIdenfifiedCommandHandler : IdentifiedCommandHandler<SetStockRejectedOrderStatusCommand, bool>
{
    public SetStockRejectedOrderStatusIdenfifiedCommandHandler(
        IMediator mediator,
        IRequestManager requestManager,
        ILogger<IdentifiedCommandHandler<SetStockRejectedOrderStatusCommand, bool>> logger)
        : base(mediator, requestManager, logger)
    {
    }

    protected override bool CreateResultForDuplicateRequest()
    {
        return true;                // Ignore duplicate requests for processing order.
    }
}