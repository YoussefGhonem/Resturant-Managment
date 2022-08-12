﻿using Microsoft.AspNetCore.Http;
using Resturant.Core.Common;
using Resturant.Core.Interfaces;
using Resturant.Data.DbModels.BusinessSchema;
using Resturant.DTO.Business.Press;

namespace Resturant.Internal.Services.Press
{
    public interface IPressService
    {
        PaginationResult<PressDataListDto> GetAll(BaseFilterDto filterDto, string serverRootPath);
        Task<IResponseDTO> CreatePress(CreateUpdatePressDto options);
        Task<IResponseDTO> UpdatePress(Guid id, CreateUpdatePressDto options);
        Task<IResponseDTO> RemovePress(Guid id);
        Task<IResponseDTO> UpdateImagePress(Guid id, IFormFile image);
    }
}