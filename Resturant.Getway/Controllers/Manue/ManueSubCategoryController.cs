using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Resturant.Core.Interfaces;
using Resturant.DTO.Business.Manue;
using Resturant.Services.Manue;

namespace Resturant.Getway.Controllers.Manue
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManueSubCategoryController : BaseController
    {
        private readonly IManuesService _iManueService;
        public ManueSubCategoryController(IManuesService service, IResponseDTO response, IHttpContextAccessor httpContextAccessor) : base(response, httpContextAccessor)
        {
            _iManueService = service;
        }

        [HttpPost]
        public async Task<IResponseDTO> CreateSubCategoryManue(CreateAndUpdateSubcategory createAndUpdateSubcategory)
        {
            _response = await _iManueService.CreateSubcategory(createAndUpdateSubcategory);
            return _response;
        }

        [HttpPut("{id}")]
        public async Task<IResponseDTO> UpdateSubCategoryManue(CreateAndUpdateSubcategory createAndUpdateSubcategory, Guid id)
        {
            _response = await _iManueService.UpdateSubcategory(id, createAndUpdateSubcategory);
            return _response;
        }
        [HttpDelete("{id}/{categoryId}")]
        public async Task<IResponseDTO> DeleteSubCategoryManue(Guid id, Guid categoryId)
        {
            _response = await _iManueService.DeletSubcategory(id,categoryId);
            return _response;
        }
        [HttpGet]
        public async Task<IEnumerable<SubcategoryforreturnDto>> GetAllCategoryManue()
        {
            var AllSubcategory = await _iManueService.GetallSubcategory();
            return AllSubcategory;
        }

    }
}
