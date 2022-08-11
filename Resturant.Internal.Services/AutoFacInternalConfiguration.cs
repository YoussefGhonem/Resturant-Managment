using Autofac;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Resturant.Internal.Services
{
    public static class AutoFacInternalConfiguration
    {
        public static IServiceCollection AddInternalServicesApplication(this IServiceCollection services)
        {

            return services;
        }
    }
}
