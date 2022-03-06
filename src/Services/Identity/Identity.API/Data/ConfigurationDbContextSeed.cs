using IdentityServer4.EntityFramework.Entities;

namespace Microsoft.eCommerceOnContainers.Services.Identity.API.Data
{
    public class ConfigurationDbContextSeed
    {
        public async Task SeedAsync(ConfigurationDbContext context, IConfiguration configuration)
        {

            //callbacks urls from config:
            var clientUrls = new Dictionary<string, string>
            {
                { "Mvc", configuration.GetValue<string>("MvcClient") },
                { "Spa", configuration.GetValue<string>("SpaClient") },
                { "Xamarin", configuration.GetValue<string>("XamarinCallback") },
                { "BasketApi", configuration.GetValue<string>("BasketApiClient") },
                { "OrderingApi", configuration.GetValue<string>("OrderingApiClient") },
                { "MobileShoppingAgg", configuration.GetValue<string>("MobileShoppingAggClient") },
                { "WebShoppingAgg", configuration.GetValue<string>("WebShoppingAggClient") },
                { "WebhooksApi", configuration.GetValue<string>("WebhooksApiClient") },
                { "WebhooksWeb", configuration.GetValue<string>("WebhooksWebClient") }
            };

            if (context.Clients != null && !context.Clients.Any())
            {
                foreach (var client in Config.GetClients(clientUrls))
                {
                    context.Clients.Add(client.ToEntity());
                }
                await context.SaveChangesAsync();
            }
            // Checking always for old redirects to fix existing deployments
            // to use new swagger-ui redirect uri as of v3.0.0
            // There should be no problem for new ones
            // ref: https://github.com/dotnet-architecture/eShopOnContainers/issues/586
            else
            {
                List<ClientRedirectUri> oldRedirects = (await context.Clients.Include(c => c.RedirectUris).ToListAsync())
                    .SelectMany(c => c.RedirectUris)
                    .Where(ru => ru.RedirectUri.EndsWith("/o2c.html"))
                    .ToList();

                if (oldRedirects.Any())
                {
                    foreach (var ru in oldRedirects)
                    {
                        ru.RedirectUri = ru.RedirectUri.Replace("/o2c.html", "/oauth2-redirect.html");
                        context.Update(ru.Client);
                    }
                    await context.SaveChangesAsync();
                }
            }

            if (!context.IdentityResources.Any())
            {
                foreach (var resource in Config.GetResources())
                {
                    context.IdentityResources.Add(resource.ToEntity());
                }
                await context.SaveChangesAsync();
            }

            if (!context.ApiResources.Any())
            {
                foreach (var api in Config.GetApis())
                {
                    context.ApiResources.Add(api.ToEntity());
                }

                await context.SaveChangesAsync();
            }
        }
    }
}
