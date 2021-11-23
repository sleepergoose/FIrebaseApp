using FIrebaseApp.DTO;
using OneOf;
using OneOf.Types;
using System;
using System.Threading.Tasks;
using FirebaseAdmin;
using FirebaseAdmin.Auth;
using FIrebaseApp.Models;

namespace FIrebaseApp.Services
{
    public class AuthService
    {
        private readonly FirebaseService _firebase;

        public AuthService(FirebaseService firebase)
        {
            _firebase = firebase;
        }

        public async Task<AuthToken> Register(RegisterDTO dto)
        {
            var user = new UserRecordArgs
            {
                DisplayName = dto.UserName,
                Email = dto.Email,
                Password = dto.Password
            };

            try
            {
                var result = await _firebase.AuthApp.CreateUserAsync(user);
                var token = await _firebase.AuthApp.CreateCustomTokenAsync(result.Uid);
                return new AuthToken { Token = token, UserRecord = result };
            }
            catch (FirebaseAuthException exception)
            {
                throw new Exception(exception.Message);
            }
        }
    }
}
