namespace Microsoft.eCommerceOnContainers.WebMVC;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the IoC container.
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllersWithViews()
            .Services
            .AddAppInsight(Configuration)
            .AddHealthChecks(Configuration)
            .AddCustomMvc(Configuration)
            .AddDevspaces()
            .AddHttpClientServices(Configuration);

        IdentityModelEventSource.ShowPII = true;       // Caution! Do NOT use in production: https://aka.ms/IdentityModel/PII

        services.AddControllers();

        services.AddCustomAuthentication(Configuration);
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Remove("sub");

        if (env.IsDevelopment())
            app.UseDeveloperExceptionPage();
        
        else
            app.UseExceptionHandler("/Error");
        
        var pathBase = Configuration["PATH_BASE"];

        if (!string.IsNullOrEmpty(pathBase))
            app.UsePathBase(pathBase);
        

        app.UseStaticFiles();
        app.UseSession();

        WebContextSeed.Seed(app, env);

        // Fix samesite issue when running eShop from docker-compose locally as by default http protocol is being used
        // Refer to https://github.com/dotnet-architecture/eShopOnContainers/issues/1391
        app.UseCookiePolicy(new CookiePolicyOptions { MinimumSameSitePolicy = AspNetCore.Http.SameSiteMode.Lax });

        app.UseRouting();

        app.UseAuthentication();
        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllerRoute("default", "{controller=Catalog}/{action=Index}/{id?}");
            endpoints.MapControllerRoute("defaultError", "{controller=Error}/{action=Error}");
            endpoints.MapControllers();
            endpoints.MapHealthChecks("/liveness", new HealthCheckOptions
            {
                Predicate = r => r.Name.Contains("self")
            });
            endpoints.MapHealthChecks("/hc", new HealthCheckOptions()
            {
                Predicate = _ => true,
                ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
            });
        });
    }
}
