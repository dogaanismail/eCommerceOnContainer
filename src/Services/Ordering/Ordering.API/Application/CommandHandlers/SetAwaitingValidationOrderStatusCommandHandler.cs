namespace Microsoft.eCommerceOnContainers.Services.Ordering.API.Application.Commands;

// Regular CommandHandler
public class SetAwaitingValidationOrderStatusCommandHandler : IRequestHandler<SetAwaitingValidationOrderStatusCommand, bool>
{
    #region Fields
    private readonly IOrderRepository _orderRepository;

    #endregion

    #region Ctor

    public SetAwaitingValidationOrderStatusCommandHandler(IOrderRepository orderRepository)
    {
        _orderRepository = orderRepository;
    }

    #endregion

    #region Handle Method

    /// <summary>
    /// Handler which processes the command when
    /// graceperiod has finished
    /// </summary>
    /// <param name="command"></param>
    /// <returns></returns>
    public async Task<bool> Handle(SetAwaitingValidationOrderStatusCommand command, CancellationToken cancellationToken)
    {
        var orderToUpdate = await _orderRepository.GetAsync(command.OrderNumber);

        if (orderToUpdate == null)
            return false;
        
        orderToUpdate.SetAwaitingValidationStatus();
        return await _orderRepository.UnitOfWork.SaveEntitiesAsync(cancellationToken);
    }

    #endregion
}


// Use for Idempotency in Command process
public class SetAwaitingValidationIdentifiedOrderStatusCommandHandler : IdentifiedCommandHandler<SetAwaitingValidationOrderStatusCommand, bool>
{
    public SetAwaitingValidationIdentifiedOrderStatusCommandHandler(
        IMediator mediator,
        IRequestManager requestManager,
        ILogger<IdentifiedCommandHandler<SetAwaitingValidationOrderStatusCommand, bool>> logger)
        : base(mediator, requestManager, logger)
    {
    }

    protected override bool CreateResultForDuplicateRequest()
    {
        return true;                // Ignore duplicate requests for processing order.
    }
}
