using AspGalleryAPI.Interface;
using AspGalleryAPI.Models;
using AspGalleryAPI.Respositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddControllers();

        builder.Services.AddDbContext<AppDbContext>();
        builder.Services.AddScoped<IPictureRepositories, PicturesRepository>();

        builder.Services.AddEndpointsApiExplorer();

        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowAllOrigins", builder => builder.AllowAnyOrigin()
                                                            .AllowAnyMethod()
                                                            .AllowAnyHeader());
        });

        var app = builder.Build();
        
        app.UseRouting();

        app.UseAuthorization();
        
        app.UseCors("AllowAllOrigins");

        app.UseHttpsRedirection();

        app.MapControllers();

        app.Run();
    }
}