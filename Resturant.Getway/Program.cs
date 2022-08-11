using Resturant.Data.DataContext;
using Resturant.Getway.Extensions;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDBConfiguration(builder.Configuration);

#region Swagger
builder.Services.AddIdentity(builder.Configuration);
builder.Services.AddSwagger();
#endregion

var app = builder.Build();

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
app.UseIdentity();
#endregion
using (var scope = app.Services.CreateScope())
{
    await scope.MigrateDatabase();
    await scope.SeedDatabase();
}
app.Run();
