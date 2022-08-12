using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Resturant.Core.Enums;
using Resturant.Data.DbModels.SecuritySchema;
using Resturant.Data.Extensions;

namespace Resturant.Data.DataContext
{
    public class DataSeedingIntilization
    {
        private static AppDbContext _appDbContext;
        private static UserManager<ApplicationUser> _userManager;
        private static IServiceProvider _serviceProvider;

        public static void SeedDataAsync(AppDbContext appDbContext, IServiceProvider serviceProvider)
        {
            _appDbContext = appDbContext;
            _serviceProvider = serviceProvider;

            var serviceScope = _serviceProvider.GetRequiredService<IServiceScopeFactory>().CreateScope();
            _userManager = serviceScope!.ServiceProvider!.GetService<UserManager<ApplicationUser>>()!;

            // call functions
            SeedApplicationRoles();
            SeedApplicationAdministrative();
            // save to the database
            _appDbContext.SaveChanges();
        }

        private static void SeedApplicationRoles()
        {
            var items = _appDbContext.Roles.ToList();
            if (items == null || items.Count == 0)
            {
                string[] names = Enum.GetNames(typeof(ApplicationRolesEnum));
                ApplicationRolesEnum[] values = (ApplicationRolesEnum[])Enum.GetValues(typeof(ApplicationRolesEnum));

                for (int i = 0; i < names.Length; i++)
                {
                    _appDbContext.Roles.Add(new ApplicationRole()
                    {
                        Name = values[i].GetDescription(),
                        NormalizedName = names[i].ToUpper(),
                        DisplayName = values[i].GetDescription(),
                    });
                }
                _appDbContext.SaveChanges();
            }

        }
        private static void SeedApplicationAdministrative()
        {
            var email = "admin@gmail.com";
            var superAdmin = _userManager.FindByNameAsync(email);

            if (superAdmin.Result == null)
            {
                var applicationUser = new ApplicationUser()
                {
                    EmailConfirmed = true,
                    FirstName = "Admin",
                    LastName = "User",
                    UserName = email,
                    Email = email,
                    LockoutEnabled = false,
                };

                var result = _userManager.CreateAsync(applicationUser, "Admin@2010");
                var rolesFromDb = _appDbContext.Roles.ToList();
                var role = rolesFromDb.FirstOrDefault(x => x.Name == ApplicationRolesEnum.Administrative.ToString());

                if (result.Result.Succeeded)
                {
                    superAdmin = _userManager.FindByEmailAsync(email);
                    _appDbContext.UserRoles.Add(new ApplicationUserRole { RoleId = role.Id, UserId = superAdmin.Result.Id });
                }
            }

        }
    }
}