﻿using Microsoft.Extensions.DependencyInjection;
using Resturant.Core.Common;
using Resturant.Core.Interfaces;
using Resturant.Internal.Services.Press;
using Resturant.Services.Identity;
using Resturant.Services.SendingEmail;
using Resturant.Services.UploadFiles;

namespace Resturant.Services
{
    public static class AutoFacInternalConfiguration
    {
        public static IServiceCollection AddInternalServicesApplication(this IServiceCollection services)
        {
            services.AddTransient<ISendingEmailService, SendingEmailService>();
            services.AddScoped<IIdentityServices, IdentityServices>();
            services.AddScoped<IResponseDTO, ResponseDTO>();
            services.AddScoped<ISettingsService, SettingsService>();
            services.AddScoped<IUploadFilesService, UploadFilesService>();
            return services;
        }
    }
}