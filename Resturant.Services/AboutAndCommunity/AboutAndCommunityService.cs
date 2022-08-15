using Resturant.Core.Interfaces;
using Resturant.DTO.Business.AboutAndCommuniry;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resturant.Services.AboutAndCommunity
{
    public class AboutAndCommunityService : IAboutAndComunity
    {
        public Task<IResponseDTO> CreateAbout(CreateAndUpdateAboutDto createAboutDto)
        {
            throw new NotImplementedException();
        }

        public Task<IResponseDTO> DeleteAbout(Guid Id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<ReturnAboutDto>> GetAllAbout()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<ReturnAboutDto>> GetMainAbout()
        {
            throw new NotImplementedException();
        }

        public Task<IResponseDTO> UpdateAbout(CreateAndUpdateAboutDto createAboutDto)
        {
            throw new NotImplementedException();
        }
    }
}
