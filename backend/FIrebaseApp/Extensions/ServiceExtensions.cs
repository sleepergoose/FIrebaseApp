using FIrebaseApp.Data;
using FIrebaseApp.Interfaces;
using FIrebaseApp.Models;
using FIrebaseApp.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FIrebaseApp.Extensions
{
    public static class ServiceExtensions
    {
        public static void RegisterCustomServices(this IServiceCollection services)
        {
            services.AddScoped<IStorage<User>, UserStorage>();
            services.AddSingleton<FirebaseService>();
        }
    }
}
