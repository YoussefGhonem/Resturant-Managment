using Autofac;
using Microsoft.Extensions.Options;
using Resturant.Email.SendGrid;
using Resturant.Getway.Extensions;
using Resturant.Internal.Services;
using Resturant.Public.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDBConfiguration(builder.Configuration);

#region Swagger
builder.Services.AddIdentity(builder.Configuration);
builder.Services.AddSwagger();
#endregion

#region .Net services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
builder.Services.AddHttpContextAccessor();
builder.Services.AddPublicServicesApplication();
builder.Services.AddInternalServicesApplication();
#endregion

#region Email
builder.Services.AddSendGrid(builder.Configuration);
#endregion

var app = builder.Build();

var options = ((IApplicationBuilder)app).ApplicationServices.GetRequiredService<IOptions<RequestLocalizationOptions>>();

app.UseRequestLocalization(options.Value);

if (!app.Environment.IsDevelopment()) // Development
{
    app.UseDeveloperExceptionPage();
}
else // Production
{
    app.UseExceptionHandler("/Error");
}


#region  Swagger
app.UseBaseSwagger();
#endregion

app.UseIdentity();

using (var scope = app.Services.CreateScope())
{
    await scope.MigrateDatabase();
    await scope.SeedDatabase();
}
app.Run();
