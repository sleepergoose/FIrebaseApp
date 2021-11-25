using FIrebaseApp.DTO;
using FIrebaseApp.Models;
using FIrebaseApp.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FIrebaseApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDTO dto)
        {
            var registerResult = await _authService.Register(dto);

            return Ok(new AuthToken { Token = registerResult, UserName = dto.UserName });
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO dto)
        {
            return null;
        }
    }
}
