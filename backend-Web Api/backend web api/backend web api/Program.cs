//using Bussiness.Utilities;

//var builder = WebApplication.CreateBuilder(args);
//var app = builder.Build();

//var x = Encryption.Encrypt("abc12");
//app.MapGet("/", () => x);
//app.MapGet("/Dec" , () => Encryption.Decrypt(x));
//app.Run();
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}
app.Logger.LogInformation("test");
app.UseAuthorization();

app.MapControllers();

app.Run();
