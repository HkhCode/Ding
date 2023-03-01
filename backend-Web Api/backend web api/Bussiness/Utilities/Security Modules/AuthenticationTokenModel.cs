using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.Utilities.Security_Modules
{
    public class AuthenticationTokenModel
    {
        private string _username;
        public string username { get { return _username; }
            set { Encryption.Encrypt(value); } }
    }
}
