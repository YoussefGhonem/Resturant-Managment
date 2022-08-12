using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Resturant.Core.Interfaces;
using Resturant.DTO.Security.Identity;
using Resturant.Internal.Services.Identity;

namespace Resturant.Getway.Controllers.Account
{
    [Authorize]
    [Route("[controller]")]

    public class AccountController : BaseController
    {
        private readonly IIdentityServices _accountService;

        public AccountController(
           IIdentityServices accountService,
           IResponseDTO response,
           IHttpContextAccessor httpContextAccessor) : base(response, httpContextAccessor)
        {
            _accountService = accountService;
        }

        [AllowAnonymous]
        [Route("api/login")]
        [HttpPost]
        public async Task<string> Login([FromBody] LoginDto login)
        {
            return await _accountService.Login(login);
        }


        [AllowAnonymous]
        [Route("api/reset-password")]
        [HttpPost]
        public async Task<IResponseDTO> ResetPassword([FromBody] ResetPasswordDto options)
        {
            _response = await _accountService.ResetPassword(options);
            return _response;
        }



        [AllowAnonymous]
        [Route("api/forget-password/{email}")]
        [HttpPost]
        public async Task<IResponseDTO> ForgetPassword(string email)
        {
            _response = await _accountService.ForgetPassword(email);
            return _response;
        }

        [Route("api/me/change-password")]
        [HttpPost]
        public async Task<IResponseDTO> ChangePassword([FromBody] ChangePasswordDto options)
        {
            _response = await _accountService.ChangePassword(LoggedInUserId, options);
            return _response;
        }
    }
}