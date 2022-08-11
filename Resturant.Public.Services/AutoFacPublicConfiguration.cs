using Autofac;
using Microsoft.Extensions.DependencyInjection;

namespace Resturant.Public.Services
{
    public static class AutoFacPublicConfiguration
    {
        public static IServiceCollection AddPublicServicesApplication(this IServiceCollection services)
        {

            return services;
        }
    }
}
