namespace Webhooks.API.IntegrationEvents;

public class OrderStatusChangedToPaidIntegrationEventHandler : IIntegrationEventHandler<OrderStatusChangedToPaidIntegrationEvent>
{
    #region Fields
    private readonly IWebhooksRetriever _retriever;
    private readonly IWebhooksSender _sender;
    private readonly ILogger _logger;

    #endregion

    #region Ctor
    public OrderStatusChangedToPaidIntegrationEventHandler(IWebhooksRetriever retriever, 
        IWebhooksSender sender, 
        ILogger<OrderStatusChangedToShippedIntegrationEventHandler> logger)
    {
        _retriever = retriever;
        _sender = sender;
        _logger = logger;
    }

    #endregion

    #region Methods

    public async Task Handle(OrderStatusChangedToPaidIntegrationEvent @event)
    {
        var subscriptions = await _retriever.GetSubscriptionsOfType(WebhookType.OrderPaid);
        _logger.LogInformation("Received OrderStatusChangedToShippedIntegrationEvent and got {SubscriptionsCount} subscriptions to process", subscriptions.Count());
        var whook = new WebhookData(WebhookType.OrderPaid, @event);
        await _sender.SendAll(subscriptions, whook);
    }

    #endregion
}
