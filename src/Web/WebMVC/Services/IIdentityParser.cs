namespace Microsoft.eCommerceOnContainers.WebMVC.Services;

public interface IIdentityParser<T>
{
    T Parse(IPrincipal principal);
}
