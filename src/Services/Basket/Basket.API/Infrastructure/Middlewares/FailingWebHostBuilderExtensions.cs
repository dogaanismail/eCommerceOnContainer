namespace Basket.API.Infrastructure.Middlewares;

public static class FailingWebHostBuilderExtensions
{
    public static IWebHostBuilder UseFailing(this IWebHostBuilder builder, Action<FailingOptions> options)
    {
        builder.ConfigureServices(services =>
        {
            services.AddSingleton<IStartupFilter>(new FailingStartupFilter(options));
        });
        return builder;
    }
}

