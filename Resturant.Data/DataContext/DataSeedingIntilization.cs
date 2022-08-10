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
        public static async Task SeedDataAsync(AppDbContext databaseContext, UserManager<ApplicationUser> userManager)
        {
            // seed
            await SeedRoles(databaseContext);
            await SeedSuperAdmin(databaseContext, userManager);
            // Save changes
            await databaseContext.SaveChangesAsync();
        }

        private static async Task SeedRoles(AppDbContext databaseContext)
        {
            var items = databaseContext.Roles.ToList();
            if (items == null || items.Count == 0)
            {
                string[] names = Enum.GetNames(typeof(ApplicationRolesEnum));
                ApplicationRolesEnum[] values = (ApplicationRolesEnum[])Enum.GetValues(typeof(ApplicationRolesEnum));

                for (int i = 0; i < names.Length; i++)
                {
                    databaseContext.Roles.Add(new ApplicationRole()
                    {
                        Id = Guid.NewGuid(),
                        Name = values[i].GetDescription(),
                        NormalizedName = names[i].ToUpper(),
                        DisplayName = values[i].GetDescription()
                    });
                }
                databaseContext.SaveChanges();
            }

            // Save changes
            await databaseContext.SaveChangesAsync();
        }

        private static async Task SeedSuperAdmin(AppDbContext databaseContext, UserManager<ApplicationUser> userManager)
        {
            const string firstName = "Super";
            const string lastName = "Admin";
            const string email = "admin@gmail.com";
            const string password = "Admin@2010";
            var user = await userManager.FindByNameAsync(email);

            if (user is not null) return;

            var rolesFromDb = databaseContext.Roles.ToList();

            var newUser = new ApplicationUser()
            {
                FirstName = firstName,
                LastName = lastName,
                Email = email
            };
            var roleObj = rolesFromDb.FirstOrDefault(x => x.Name == ApplicationRolesEnum.Administrative.ToString());

            var role = new ApplicationUserRole { RoleId = roleObj.Id, Role = roleObj };

            newUser.UserRoles.Add(role);

            var result = await userManager.CreateAsync(newUser, password);
        }
    }
}