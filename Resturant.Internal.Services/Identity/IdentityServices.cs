using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Resturant.Core.Enums;
using Resturant.Core.Interfaces;
using Resturant.Data;
using Resturant.Data.DbModels.SecuritySchema;
using Resturant.DTO.Security.Identity;
using Resturant.DTO.Security.User;
using Resturant.Internal.Services.Identity.Extensions;
using Resturant.Internal.Services.SendingEmail;
using System.Web;

namespace Resturant.Internal.Services.Identity
{
    public class IdentityServices : IIdentityServices
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IResponseDTO _response;
        private readonly ISendingEmailService _sendingEmailService;

        public IdentityServices(AppDbContext context, IConfiguration configuration, IResponseDTO response)
        {
            _context = context;
            _configuration = configuration;
            _response = response;
        }
        public async Task<IResponseDTO> ChangePassword(int userId, ChangePasswordDto options)
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            var result = await _userManager.ChangePasswordAsync(user, options.CurrentPassword, options.NewPassword);

            if (result.Succeeded)
            {
                _response.IsPassed = true;
                return _response;
            };

            var errors = result.Errors.Select(x => x.Description).ToList();
            throw new Exception(string.Join(",", errors));
        }
        public async Task<IResponseDTO> ForgetPassword(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            var encodedToken = HttpUtility.UrlEncode(token);

            // send email
            await _sendingEmailService.BeforeResetPassword(user.Id, encodedToken);

            _response.IsPassed = true;
            return _response;
        }
        public async Task<string> Login(LoginDto model)
        {
            if (await ValidationExtension.BeExistUser(_context, model.Email)) return "Not Found";


            var user = await _context.Users
                                      .Include(u => u.UserRoles).ThenInclude(userRole => userRole.Role)
                                      .Include(user => user.Claims)
                                      .FirstOrDefaultAsync(u => u.Email == model.Email);

            if (user == null) return "";

            var token = JsonWebTokenGeneration.GenerateJwtToken(_configuration, user);

            return token;
        }
        public async Task<IResponseDTO?> Register(RegisterDto request)
        {
            if (!await ValidationExtension.BeEmailUnique(_userManager, request.Email))
            {
                _response.IsPassed = false;
                _response.Errors.Add("This email is Exist");
                return _response;
            }

            var rolesFromDb = await _context.Roles.ToListAsync();

            var applicationUser = new ApplicationUser()
            {
                EmailConfirmed = true,
                FirstName = request.FirstName,
                LastName = request.LastName,
                UserName = request.Email,
                Email = request.Email,
                LockoutEnabled = false,
            };

            var result = _userManager.CreateAsync(applicationUser, request.Password);
            var role = rolesFromDb.FirstOrDefault(x => x.Name == ApplicationRolesEnum.Customer.ToString());

            var customer = await _userManager.FindByEmailAsync(request.Email);
            _context.UserRoles.Add(new ApplicationUserRole { RoleId = role.Id, UserId = customer.Id });

            _response.IsPassed = true;
            return _response;
        }
        public async Task<IResponseDTO> ResetPassword(ResetPasswordDto request)
        {
            if (await ValidationExtension.BeExistUser(_context, request.Email))
            {
                _response.IsPassed = false;
                _response.Errors.Add("This email not found");
                return _response;
            };
            var user = await _userManager.FindByEmailAsync(request.Email);

            var result = await _userManager.ResetPasswordAsync(user, request.Token, request.NewPassword);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(x => x.Description).ToList();
                throw new Exception(string.Join(",", errors));
            }
            _response.IsPassed = true;
            return _response;
        }
        public Task<IResponseDTO> UpdateUserProfile(int id, UpdateUserProfile options, IFormFile file)
        {
            throw new NotImplementedException();
        }
    }
}
