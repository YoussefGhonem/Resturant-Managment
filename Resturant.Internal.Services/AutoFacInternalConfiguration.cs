using Microsoft.Extensions.DependencyInjection;
using Resturant.Core.Common;
using Resturant.Core.Interfaces;
using Resturant.Internal.Services.Identity;
using Resturant.Internal.Services.SendingEmail;

namespace Resturant.Internal.Services
{
    public static class AutoFacInternalConfiguration
    {
        public static IServiceCollection AddInternalServicesApplication(this IServiceCollection services)
        {
            services.AddTransient<ISendingEmailService, SendingEmailService>();
            services.AddScoped<IIdentityServices, IdentityServices>();
            services.AddScoped<IResponseDTO, ResponseDTO>();
            return services;
        }
    }
}
