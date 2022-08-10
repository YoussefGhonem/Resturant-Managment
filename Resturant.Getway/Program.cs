using Resturant.Getway.Extensions;

var builder = WebApplication.CreateBuilder(args);

#region Swagger
builder.Services.AddSwagger();
builder.Services.AddIdentity(builder.Configuration);
#endregion


var app = builder.Build();

#region  Swagger
app.UseBaseSwagger();
app.UseIdentity();
#endregion

app.Run();
