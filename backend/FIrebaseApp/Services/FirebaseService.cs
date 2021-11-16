using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FirebaseAdmin;
using FirebaseAdmin.Auth;
using Google.Apis.Auth.OAuth2;

namespace FIrebaseApp.Services
{
    public sealed class FirebaseService
    {
        public FirebaseAuth AuthApp { get; }

        public FirebaseService()
        {
            var app = FirebaseApp.Create(new AppOptions()
            {
                Credential = GoogleCredential.FromFile(Environment.CurrentDirectory + "/project-fbapp.json")
            });

            AuthApp = FirebaseAuth.GetAuth(app);
        }
    }
}
