namespace Microsoft.eCommerceOnContainers.Services.Ordering.API.Application.IntegrationEvents.EventHandling;

public class GracePeriodConfirmedIntegrationEventHandler : IIntegrationEventHandler<GracePeriodConfirmedIntegrationEvent>
{
    #region Fields

    private readonly IMediator _mediator;
    private readonly ILogger<GracePeriodConfirmedIntegrationEventHandler> _logger;

    #endregion

    #region Ctor

    public GracePeriodConfirmedIntegrationEventHandler(
        IMediator mediator, 
        ILogger<GracePeriodConfirmedIntegrationEventHandler> logger)
    {
        _mediator = mediator;
        _logger = logger ?? throw new System.ArgumentNullException(nameof(logger));
    }

    #endregion

    #region Handle Method

    /// <summary>
    /// Event handler which confirms that the grace period
    /// has been completed and order will not initially be cancelled.
    /// Therefore, the order process continues for validation. 
    /// </summary>
    /// <param name="event">       
    /// </param>
    /// <returns></returns>
    public async Task Handle(GracePeriodConfirmedIntegrationEvent @event)
    {
        using (LogContext.PushProperty("IntegrationEventContext", $"{@event.Id}-{Program.AppName}"))
        {
            _logger.LogInformation("----- Handling integration event: {IntegrationEventId} at {AppName} - ({@IntegrationEvent})", @event.Id, Program.AppName, @event);

            var command = new SetAwaitingValidationOrderStatusCommand(@event.OrderId);

            _logger.LogInformation(
                "----- Sending command: {CommandName} - {IdProperty}: {CommandId} ({@Command})",
                command.GetGenericTypeName(),
                nameof(command.OrderNumber),
                command.OrderNumber,
                command);

            await _mediator.Send(command);
        }
    }

    #endregion
}
