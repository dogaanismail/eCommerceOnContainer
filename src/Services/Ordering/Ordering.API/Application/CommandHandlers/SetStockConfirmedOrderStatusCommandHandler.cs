namespace Microsoft.eCommerceOnContainers.Services.Ordering.API.Application.Commands;

// Regular CommandHandler
public class SetStockConfirmedOrderStatusCommandHandler : IRequestHandler<SetStockConfirmedOrderStatusCommand, bool>
{
    #region Fields
    private readonly IOrderRepository _orderRepository;

    #endregion

    #region Ctor

    public SetStockConfirmedOrderStatusCommandHandler(IOrderRepository orderRepository)
    {
        _orderRepository = orderRepository;
    }

    #endregion

    #region Handle Method

    /// <summary>
    /// Handler which processes the command when
    /// Stock service confirms the request
    /// </summary>
    /// <param name="command"></param>
    /// <returns></returns>
    public async Task<bool> Handle(SetStockConfirmedOrderStatusCommand command, CancellationToken cancellationToken)
    {
        // Simulate a work time for confirming the stock
        await Task.Delay(10000, cancellationToken);

        var orderToUpdate = await _orderRepository.GetAsync(command.OrderNumber);

        if (orderToUpdate == null)
            return false;
        

        orderToUpdate.SetStockConfirmedStatus();
        return await _orderRepository.UnitOfWork.SaveEntitiesAsync(cancellationToken);
    }

    #endregion
}


// Use for Idempotency in Command process
public class SetStockConfirmedOrderStatusIdenfifiedCommandHandler : IdentifiedCommandHandler<SetStockConfirmedOrderStatusCommand, bool>
{
    public SetStockConfirmedOrderStatusIdenfifiedCommandHandler(
        IMediator mediator,
        IRequestManager requestManager,
        ILogger<IdentifiedCommandHandler<SetStockConfirmedOrderStatusCommand, bool>> logger)
        : base(mediator, requestManager, logger)
    {
    }

    protected override bool CreateResultForDuplicateRequest()
    {
        return true;                // Ignore duplicate requests for processing order.
    }
}
