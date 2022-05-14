namespace Microsoft.eCommerceOnContainers.Services.Basket.API.Services;

public class IdentityService : IIdentityService
{
    #region Fields
    private IHttpContextAccessor _context;

    #endregion

    #region Ctor

    public IdentityService(IHttpContextAccessor context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    #endregion

    #region Methods

    public string GetUserIdentity()
    {
        return _context.HttpContext.User.FindFirst("sub").Value;
    }

    #endregion
}

