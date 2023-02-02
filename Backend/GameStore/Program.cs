using GameStore;
using GameRepository.DataObjects;
using GameServices.Services.adminServices;
using GameServices.Services.contactServices;
using GameServices.Services.GamesServices;
using GameServices.Services.UserServices;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using MySql.EntityFrameworkCore.Extensions;
using Game.Repository.Repository.UserRepository;
using Game.Repository.Repository.GamesRepository;
using Game.Repository.Repository.ContactRepository;
using Game.Repository.Repository.AdminRepository;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSingleton<IDesignTimeServices, MysqlEntityFrameworkDesignTimeServices>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<IUserRepository, UserRepository>();
builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddTransient<IGamesRepository, GamesRepository>();
builder.Services.AddTransient<IGamesService, GamesService>();
builder.Services.AddTransient<IContactRepository, ContactRepository>();
builder.Services.AddTransient<IContactService, ContactService>();
builder.Services.AddTransient<IAdminRepository, AdminRepository>();
builder.Services.AddTransient<IAdminService, AdminService>();
builder.Services.AddEntityFrameworkMySQL().AddDbContext<gamestoredbContext>(options => {
    options.UseMySQL(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("angular",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200", "http://localhost:4201").WithMethods("PUT", "DELETE", "GET","POST").AllowAnyHeader(); 
        });

});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors();
app.MapControllers();

app.Run();
