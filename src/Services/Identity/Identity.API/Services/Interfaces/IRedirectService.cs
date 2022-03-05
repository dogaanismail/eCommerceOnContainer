namespace Microsoft.eCommerceOnContainers.Services.Identity.API.Services
{
    public interface IRedirectService
    {
        string ExtractRedirectUriFromReturnUrl(string url);
    }
}
