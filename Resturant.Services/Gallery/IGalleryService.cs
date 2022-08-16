using Resturant.Core.Common;
using Resturant.Core.Interfaces;
using Resturant.DTO.Business.Gallery;
using Resturant.DTO.Business.PrivateDiningImage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resturant.Services.Gallery
{
    public interface IGalleryService
    {

        Task<IResponseDTO> UploadNewImage(CreateAndUpdateGalleryDto createAndUpdateGallery);
        Task<IResponseDTO> DeleteImage(Guid Id);
        Task<IEnumerable<GalleryReturnDto>> GetAllImagesForGallary();
        PaginationResult<GalleryReturnDto> GetAllWithPagination(BaseFilterDto filterDto, string serverRootPath);
    }
}
