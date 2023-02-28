using Bussiness.Utilities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend_web_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Login : ControllerBase
    {
        [HttpPost]
        public string login()
        {
            return Encryption.Decrypt("!eW@tZ#tX$s%");
        }
    }
}
