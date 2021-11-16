using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FIrebaseApp.Extensions;
using FIrebaseApp.Interfaces;
using FIrebaseApp.Models;
using FIrebaseApp.Data;
using FIrebaseApp.Services;

namespace FIrebaseApp
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.RegisterCustomServices();

            services.AddMvc(option => option.EnableEndpointRouting = false);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseRouting();

            app.UseMvcWithDefaultRoute();
        }
    }
}
