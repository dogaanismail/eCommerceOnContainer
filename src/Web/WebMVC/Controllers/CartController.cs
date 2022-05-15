namespace Microsoft.eCommerceOnContainers.WebMVC.Controllers;

[Authorize(AuthenticationSchemes = OpenIdConnectDefaults.AuthenticationScheme)]
public class CartController : Controller
{
    #region Fields
    private readonly IBasketService _basketSvc;
    private readonly ICatalogService _catalogSvc;
    private readonly IIdentityParser<ApplicationUser> _appUserParser;

    #endregion

    #region Ctor

    public CartController(IBasketService basketSvc, 
        ICatalogService catalogSvc, 
        IIdentityParser<ApplicationUser> appUserParser)
    {
        _basketSvc = basketSvc;
        _catalogSvc = catalogSvc;
        _appUserParser = appUserParser;
    }

    #endregion

    #region Methods

    public async Task<IActionResult> Index()
    {
        try
        {
            var user = _appUserParser.Parse(HttpContext.User);
            var vm = await _basketSvc.GetBasket(user);

            return View(vm);
        }
        catch (Exception ex)
        {
            HandleException(ex);
        }

        return View();
    }


    [HttpPost]
    public async Task<IActionResult> Index(Dictionary<string, int> quantities, string action)
    {
        try
        {
            var user = _appUserParser.Parse(HttpContext.User);
            var basket = await _basketSvc.SetQuantities(user, quantities);

            if (action == "[ Checkout ]")
                return RedirectToAction("Create", "Order");           
        }
        catch (Exception ex)
        {
            HandleException(ex);
        }

        return View();
    }

    public async Task<IActionResult> AddToCart(CatalogItem productDetails)
    {
        try
        {
            if (productDetails?.Id != null)
            {
                var user = _appUserParser.Parse(HttpContext.User);
                await _basketSvc.AddItemToBasket(user, productDetails.Id);
            }

            return RedirectToAction("Index", "Catalog");
        }
        catch (Exception ex)
        {
            // Catch error when Basket.api is in circuit-opened mode                 
            HandleException(ex);
        }

        return RedirectToAction("Index", "Catalog", new { errorMsg = ViewBag.BasketInoperativeMsg });
    }

    #endregion

    #region Private Methods

    private void HandleException(Exception ex)
    {
        ViewBag.BasketInoperativeMsg = $"Basket Service is inoperative {ex.GetType().Name} - {ex.Message}";
    }

    #endregion
}
