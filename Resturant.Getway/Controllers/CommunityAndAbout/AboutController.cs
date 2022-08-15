using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Resturant.Core.Interfaces;
using Resturant.Services.AboutAndCommunity;

namespace Resturant.Getway.Controllers.CommunityAndAbout
{
    [Route("api/[controller]")]
    [ApiController]
    public class AboutController : BaseController
    {
        private readonly IAboutAndComunity _services;
        public AboutController(
          IAboutAndComunity service,
          IResponseDTO response,
          IHttpContextAccessor httpContextAccessor) : base(response, httpContextAccessor)
        {
            _services = service;
        }
    }
}
