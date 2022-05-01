namespace Microsoft.eCommerceOnContainers.Services.Ordering.API.Application.CommandHandlers;

// Regular CommandHandler
public class CancelOrderCommandHandler : IRequestHandler<CancelOrderCommand, bool>
{
    #region Fields
    private readonly IOrderRepository _orderRepository;

    #endregion

    #region Ctor

    public CancelOrderCommandHandler(IOrderRepository orderRepository)
    {
        _orderRepository = orderRepository;
    }

    #endregion

    #region Handle Method

    /// <summary>
    /// Handler which processes the command when
    /// customer executes cancel order from app
    /// </summary>
    /// <param name="command"></param>
    /// <returns></returns>
    public async Task<bool> Handle(CancelOrderCommand command, CancellationToken cancellationToken)
    {
        var orderToUpdate = await _orderRepository.GetAsync(command.OrderNumber);

        if (orderToUpdate == null)
            return false;
        
        orderToUpdate.SetCancelledStatus();
        return await _orderRepository.UnitOfWork.SaveEntitiesAsync(cancellationToken);
    }

    #endregion
}


// Use for Idempotency in Command process
public class CancelOrderIdentifiedCommandHandler : IdentifiedCommandHandler<CancelOrderCommand, bool>
{
    public CancelOrderIdentifiedCommandHandler(
        IMediator mediator,
        IRequestManager requestManager,
        ILogger<IdentifiedCommandHandler<CancelOrderCommand, bool>> logger)
        : base(mediator, requestManager, logger)
    {
    }

    protected override bool CreateResultForDuplicateRequest()
    {
        return true;                // Ignore duplicate requests for processing order.
    }
}
