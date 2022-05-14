namespace Basket.API.Infrastructure.Middlewares;

public class FailingStartupFilter : IStartupFilter
{
    #region Fields
    private readonly Action<FailingOptions> _options;

    #endregion

    #region Ctor
    public FailingStartupFilter(Action<FailingOptions> optionsAction)
    {
        _options = optionsAction;
    }

    #endregion

    #region Methods

    public Action<IApplicationBuilder> Configure(Action<IApplicationBuilder> next)
    {
        return app =>
        {
            app.UseFailingMiddleware(_options);
            next(app);
        };
    }

    #endregion
}

