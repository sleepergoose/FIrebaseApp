using FIrebaseApp.DTO;
using OneOf;
using OneOf.Types;
using System;
using System.Threading.Tasks;
using FirebaseAdmin;
using FirebaseAdmin.Auth;

namespace FIrebaseApp.Services
{
    public class AuthService
    {
        private readonly FirebaseService _firebase;

        public AuthService(FirebaseService firebase)
        {
            _firebase = firebase;
        }

        public async Task<OneOf<Success, FirebaseAuthException>> Register(RegisterDTO dto)
        {
            var user = new UserRecordArgs
            {
                DisplayName = dto.UserName,
                Email = dto.Email,
                Password = dto.Password
            };

            try
            {
                await _firebase.AuthApp.CreateUserAsync(user);
                return new Success();
            }
            catch (FirebaseAuthException exception)
            {
                return exception;
            }
        }
    }
}
