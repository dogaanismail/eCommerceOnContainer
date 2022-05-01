namespace Microsoft.eCommerceOnContainers.Services.Ordering.API.Application.Behaviors;

public class LoggingBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse> where TRequest : MediatR.IRequest<TResponse>
{
    #region Fields

    private readonly ILogger<LoggingBehavior<TRequest, TResponse>> _logger;

    #endregion

    #region Ctor

    public LoggingBehavior(ILogger<LoggingBehavior<TRequest, TResponse>> logger) => _logger = logger;

    #endregion

    #region Handle Method

    public async Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken, RequestHandlerDelegate<TResponse> next)
    {
        _logger.LogInformation("----- Handling command {CommandName} ({@Command})", request.GetGenericTypeName(), request);

        var response = await next();

        _logger.LogInformation("----- Command {CommandName} handled - response: {@Response}", request.GetGenericTypeName(), response);

        return response;
    }

    #endregion
}

