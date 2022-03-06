namespace Identity.API.Controllers
{
    public class HomeController : Controller
    {
        #region Fields

        private readonly IIdentityServerInteractionService _interaction;
        private readonly IOptionsSnapshot<AppSettings> _settings;
        private readonly IRedirectService _redirectSvc;

        #endregion

        #region Ctor

        public HomeController(IIdentityServerInteractionService interaction, 
            IOptionsSnapshot<AppSettings> settings, 
            IRedirectService redirectSvc)
        {
            _interaction = interaction;
            _settings = settings;
            _redirectSvc = redirectSvc;
        }

        #endregion

        #region Methods

        public IActionResult Index(string returnUrl)
        {
            return View();
        }

        public IActionResult ReturnToOriginalApplication(string returnUrl)
        {
            if (returnUrl != null)
                return Redirect(_redirectSvc.ExtractRedirectUriFromReturnUrl(returnUrl));
            else
                return RedirectToAction("Index", "Home");
        }

        /// <summary>
        /// Shows the error page
        /// </summary>
        public async Task<IActionResult> Error(string errorId)
        {
            var vm = new ErrorViewModel();

            // retrieve error details from identityserver
            var message = await _interaction.GetErrorContextAsync(errorId);

            if (message != null)          
                vm.Error = message;
           
            return View("Error", vm);
        }

        #endregion
    }
}
