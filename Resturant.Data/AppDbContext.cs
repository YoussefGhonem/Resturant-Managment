using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Resturant.Data.DataContext;
using Resturant.Data.DbModels.BusinessSchema;
using Resturant.Data.DbModels.LookupSchema;
using Resturant.Data.DbModels.SecuritySchema;
using System.Reflection;

namespace Resturant.Data
{
    public class AppDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, Guid,
        ApplicationUserClaim, ApplicationUserRole, ApplicationUserLogin,
        ApplicationRoleClaim, ApplicationUserToken>
    {
        public AppDbContext()
        {

        }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.UserModelBuilder();
        }

        public DbSet<Press> Press { get; set; }
        public DbSet<Settings> Settings { get; set; }
        public DbSet<PrivateDining> PrivateDining { get; set; }
        public DbSet<PrivateDiningImage> PrivateDiningImages { get; set; }
        public DbSet<EventType> EventTypes { get; set; }


    }
}
