﻿namespace Microsoft.eCommerceOnContainers.Web.Shopping.HttpAggregator.Services;

public class OrderApiClient : IOrderApiClient
{
    #region Fields
    private readonly HttpClient _apiClient;
    private readonly ILogger<OrderApiClient> _logger;
    private readonly UrlsConfig _urls;

    #endregion

    #region Ctor

    public OrderApiClient(HttpClient httpClient, 
        ILogger<OrderApiClient> logger, 
        IOptions<UrlsConfig> config)
    {
        _apiClient = httpClient;
        _logger = logger;
        _urls = config.Value;
    }

    #endregion

    #region Methods

    public async Task<OrderData> GetOrderDraftFromBasketAsync(BasketData basket)
    {
        var url = $"{_urls.Orders}{UrlsConfig.OrdersOperations.GetOrderDraft()}";
        var content = new StringContent(JsonSerializer.Serialize(basket), System.Text.Encoding.UTF8, "application/json");
        var response = await _apiClient.PostAsync(url, content);

        response.EnsureSuccessStatusCode();

        var ordersDraftResponse = await response.Content.ReadAsStringAsync();

        return JsonSerializer.Deserialize<OrderData>(ordersDraftResponse, new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });
    }

    #endregion
}
