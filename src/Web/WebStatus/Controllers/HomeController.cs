﻿namespace WebStatus.Controllers;

public class HomeController : Controller
{
    #region Fields
    private IConfiguration _configuration;

    #endregion

    #region Ctor

    public HomeController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    #endregion

    #region Methods

    public IActionResult Index()
    {
        var basePath = _configuration["PATH_BASE"];
        return Redirect($"{basePath}/hc-ui");
    }

    [HttpGet("/Config")]
    public IActionResult Config()
    {
        var configurationValues = _configuration.GetSection("HealthChecksUI:HealthChecks")
            .GetChildren()
            .SelectMany(cs => cs.GetChildren())
            .Union(_configuration.GetSection("HealthChecks-UI:HealthChecks")
            .GetChildren()
            .SelectMany(cs => cs.GetChildren()))
            .ToDictionary(v => v.Path, v => v.Value);

        return View(configurationValues);
    }

    public IActionResult Error()
    {
        return View();
    }

    #endregion
}