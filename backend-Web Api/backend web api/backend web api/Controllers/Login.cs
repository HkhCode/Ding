using Bussiness.Utilities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Bussiness.Utilities.Security_Modules;
namespace backend_web_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Login : ControllerBase
    {
        [HttpPost]
        public string login()
        {
            return "Hello World";
        }
    }
}
