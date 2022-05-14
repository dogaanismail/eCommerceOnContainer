namespace Basket.API.Infrastructure.Filters;

public partial class HttpGlobalExceptionFilter : IExceptionFilter
{
    #region Fields
    private readonly IWebHostEnvironment env;
    private readonly ILogger<HttpGlobalExceptionFilter> logger;

    #endregion

    #region Ctor

    public HttpGlobalExceptionFilter(IWebHostEnvironment env, 
        ILogger<HttpGlobalExceptionFilter> logger)
    {
        this.env = env;
        this.logger = logger;
    }

    #endregion

    #region Methods

    public void OnException(ExceptionContext context)
    {
        logger.LogError(new EventId(context.Exception.HResult),
            context.Exception,
            context.Exception.Message);

        if (context.Exception.GetType() == typeof(BasketDomainException))
        {
            var json = new JsonErrorResponse
            {
                Messages = new[] { context.Exception.Message }
            };

            context.Result = new BadRequestObjectResult(json);
            context.HttpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
        }
        else
        {
            var json = new JsonErrorResponse
            {
                Messages = new[] { "An error occurred. Try it again." }
            };

            if (env.IsDevelopment())
            {
                json.DeveloperMessage = context.Exception;
            }

            context.Result = new InternalServerErrorObjectResult(json);
            context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        }
        context.ExceptionHandled = true;
    }

    #endregion
}
