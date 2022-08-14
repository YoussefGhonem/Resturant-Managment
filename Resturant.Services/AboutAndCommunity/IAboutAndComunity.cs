using Resturant.Core.Interfaces;
using Resturant.DTO.Business.AboutAndCommuniry;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resturant.Services.AboutAndCommunity
{
    public interface IAboutAndComunity
    {

        // All Method with About 
        Task<IResponseDTO> CreateAbout(CreateAndUpdateAboutDto createAboutDto);
        Task<IResponseDTO> UpdateAbout(CreateAndUpdateAboutDto createAboutDto);
        Task<IResponseDTO> DeleteAbout(Guid Id);
        Task<IEnumerable<ReturnAboutDto>> GetAllAbout();
        Task<IEnumerable<ReturnAboutDto>> GetMainAbout();
        // finish About implemntion

    }
}
