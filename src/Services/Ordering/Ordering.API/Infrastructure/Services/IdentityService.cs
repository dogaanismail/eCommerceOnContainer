namespace Microsoft.eCommerceOnContainers.Services.Ordering.API.Infrastructure.Services;

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

    public string GetUserName()
    {
        return _context.HttpContext.User.Identity.Name;
    }

    #endregion
}
