// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860
namespace eCommerceConContainers.WebSPA.Server.Controllers;

public class HomeController : Controller
{
    #region Fields

    private readonly IWebHostEnvironment _env;
    private readonly IOptionsSnapshot<AppSettings> _settings;

    #endregion

    #region Ctor
    public HomeController(IWebHostEnvironment env, 
        IOptionsSnapshot<AppSettings> settings)
    {
        _env = env;
        _settings = settings;
    }
    #endregion

    #region Methods
    public IActionResult Configuration()
    {
        return Json(_settings.Value);
    }

    #endregion
}
