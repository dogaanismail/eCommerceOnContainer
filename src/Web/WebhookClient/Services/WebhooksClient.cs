namespace WebhookClient.Services;

public class WebhooksClient : IWebhooksClient
{
    #region Fields
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly Settings _settings;

    #endregion

    #region Ctor
    public WebhooksClient(IHttpClientFactory httpClientFactory, 
        IOptions<Settings> settings)
    {
        _httpClientFactory = httpClientFactory;
        _settings = settings.Value;
    }

    #endregion

    #region Methods

    public async Task<IEnumerable<WebhookResponse>> LoadWebhooks()
    {
        var client = _httpClientFactory.CreateClient("GrantClient");
        var response = await client.GetAsync(_settings.WebhooksUrl + "/api/v1/webhooks");
        var json = await response.Content.ReadAsStringAsync();
        var subscriptions = JsonSerializer.Deserialize<IEnumerable<WebhookResponse>>(json, new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });

        return subscriptions;
    }

    #endregion
}
