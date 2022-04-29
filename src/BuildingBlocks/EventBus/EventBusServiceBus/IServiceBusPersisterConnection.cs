namespace Microsoft.eCommerceOnContainers.BuildingBlocks.EventBusServiceBus;

public interface IServiceBusPersisterConnection : IDisposable
{
    ServiceBusClient TopicClient { get; }
    ServiceBusAdministrationClient AdministrationClient { get; }
}
