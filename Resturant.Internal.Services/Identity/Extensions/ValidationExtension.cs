using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Resturant.Data;
using Resturant.Data.DbModels.SecuritySchema;

namespace Resturant.Internal.Services.Identity.Extensions
{
    public static class ValidationExtension
    {
        public static async Task<bool> BeExistUser(AppDbContext context, string email)
        {
            var user = await context.Users
                .Where(user => user.Email == email)
                .Include(user => user.UserRoles).ThenInclude(role => role.Role)
                .Include(user => user.Claims)
                .FirstOrDefaultAsync();

            return user is not null;
        }
        public static async Task<bool> BeEmailUnique(UserManager<ApplicationUser> userManager, string email)
        {
            return await userManager.FindByEmailAsync(email) == null;
        }
    }
}
