using FirebaseAdmin.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FIrebaseApp.Models
{
    public class AuthToken
    {
        public string Token { get; set; }
        public UserRecord UserRecord { get; set; }
    }
}
