namespace Microsoft.eCommerceOnContainers.Web.Shopping.HttpAggregator.Services;

public class CatalogService : ICatalogService
{
    #region Fields

    private readonly Catalog.CatalogClient _client;
    private readonly ILogger<CatalogService> _logger;

    #endregion

    #region Ctor

    public CatalogService(Catalog.CatalogClient client, 
        ILogger<CatalogService> logger)
    {
        _client = client;
        _logger = logger;
    }

    #endregion

    #region Methods

    public async Task<CatalogItem> GetCatalogItemAsync(int id)
    {
        var request = new CatalogItemRequest { Id = id };
        _logger.LogInformation("grpc request {@request}", request);
        var response = await _client.GetItemByIdAsync(request);
        _logger.LogInformation("grpc response {@response}", response);
        return MapToCatalogItemResponse(response);
    }

    public async Task<IEnumerable<CatalogItem>> GetCatalogItemsAsync(IEnumerable<int> ids)
    {
        var request = new CatalogItemsRequest { Ids = string.Join(",", ids), PageIndex = 1, PageSize = 10 };
        _logger.LogInformation("grpc request {@request}", request);
        var response = await _client.GetItemsByIdsAsync(request);
        _logger.LogInformation("grpc response {@response}", response);
        return response.Data.Select(this.MapToCatalogItemResponse);
    }

    #endregion

    #region Private Methods

    private CatalogItem MapToCatalogItemResponse(CatalogItemResponse catalogItemResponse)
    {
        return new CatalogItem
        {
            Id = catalogItemResponse.Id,
            Name = catalogItemResponse.Name,
            PictureUri = catalogItemResponse.PictureUri,
            Price = (decimal)catalogItemResponse.Price
        };
    }

    #endregion
}
