using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend_web_api.Controllers.Ding
{
    [Route("api/[controller]")]
    [ApiController]
    public class InAndOut : ControllerBase
    {
        [HttpPost]
        public string submitIn(string username , string date)
        {
            return username + "  " + date;
        }
    }
}
