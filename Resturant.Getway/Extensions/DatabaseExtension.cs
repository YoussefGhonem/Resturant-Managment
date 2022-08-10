using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Resturant.Data;
using Resturant.Data.DataContext;
using Resturant.Data.DbModels.SecuritySchema;

namespace Resturant.Getway.Extensions;

/// <summary>
/// Extensions helpers method for database
/// </summary>
public static class DatabaseExtension
{

    public static async Task MigrateDatabase(this IServiceScope scope)
    {
        var vendorDbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        await vendorDbContext.Database.MigrateAsync();
    }

    public static async Task SeedDatabase(this IServiceScope scope)
    {
        var appDbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
        await DataSeedingIntilization.SeedDataAsync(appDbContext, userManager);
    }
}