using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Resturant.Core.Interfaces;
using Resturant.Services.AboutAndCommunity;
using Resturant.Services.EventType;
using Resturant.Services.PrivateDining;

namespace Resturant.Getway.Controllers.CommunityAndAbout
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : BaseController
    {
        private readonly IAboutAndComunity _services;
        public TeamController(
          IAboutAndComunity service,
          IResponseDTO response,
          IHttpContextAccessor httpContextAccessor) : base(response, httpContextAccessor)
        {
            _services = service;
        }
    }
}
