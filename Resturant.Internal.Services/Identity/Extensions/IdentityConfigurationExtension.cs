using Microsoft.Extensions.Configuration;
using Resturant.Internal.Services.Models;

namespace Resturant.Internal.Services.Identity.Extensions;

public static class IdentityConfigurationExtension
{
    public static IdentityClientConfig GetAdminClientConfig(this IConfiguration configuration)
    {
        var config = configuration.GetSection("IdentityClients:AdminPortal").Get<IdentityClientConfig>();
        if (config is null)
        {
            throw new Exception("Missing 'IdentityClients:AdminPortal' configuration section from the appsettings.");
        }

        return config;
    }
}