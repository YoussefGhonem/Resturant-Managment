using Mapster;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Resturant.Core.Common;
using Resturant.Core.Interfaces;
using Resturant.Data;
using Resturant.Data.DbModels.BusinessSchema;
using Resturant.DTO.Business.Press;
using Resturant.Services.UploadFiles;

namespace Resturant.Internal.Services.Press
{
    public class SettingsService : ISettingsService
    {
        private readonly AppDbContext _context;
        private readonly IResponseDTO _response;
        private readonly IUploadFilesService _uploadFilesService;

        public SettingsService(AppDbContext context, IResponseDTO response, IUploadFilesService uploadFilesService)
        {
            _context = context;
            _response = response;
            _uploadFilesService = uploadFilesService;
        }

    }
}
