namespace WebMVC.Controllers;

[Authorize(AuthenticationSchemes = OpenIdConnectDefaults.AuthenticationScheme)]
public class OrderManagementController : Controller
{
    #region Fields
    private IOrderingService _orderSvc;
    private readonly IIdentityParser<ApplicationUser> _appUserParser;

    #endregion

    #region Ctor
    public OrderManagementController(IOrderingService orderSvc, 
        IIdentityParser<ApplicationUser> appUserParser)
    {
        _appUserParser = appUserParser;
        _orderSvc = orderSvc;
    }

    #endregion

    #region Endpoints

    public async Task<IActionResult> Index()
    {
        var user = _appUserParser.Parse(HttpContext.User);
        var vm = await _orderSvc.GetMyOrders(user);

        return View(vm);
    }

    [HttpPost]
    public async Task<IActionResult> OrderProcess(string orderId, string actionCode)
    {
        if (OrderProcessAction.Ship.Code == actionCode)
        {
            await _orderSvc.ShipOrder(orderId);
        }

        return RedirectToAction("Index");
    }

    #endregion
}
