﻿using Microsoft.AspNetCore.Http;
using Resturant.Core.Interfaces;
using Resturant.DTO.Business.Settings;

namespace Resturant.Internal.Services.Press
{
    public interface ISettingsService
    {
        Task<SettingsDetailsDto> SettingsDetails(string serverRootPath);
        Task<IResponseDTO> UpdateAboutUsSettings(UpdateSettingsDto options);
        Task<IResponseDTO> UpdatePrivateDining(UpdateSettingsDto options);
    }
}
