namespace Microsoft.eCommerceOnContainers.BuildingBlocks.EventBus.Abstractions;
public interface IDynamicIntegrationEventHandler
{
    Task Handle(dynamic eventData);
}
