using Bussiness.JSONs;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;

namespace web_service.Controllers.Ding
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserControlls : ControllerBase
    {
        [HttpGet]
        public userJSON getCurrentUser()
        {
            return new userJSON() { Id = 1, Username = "Hosein", Email = "hosein@gmail.com" };
        }
    }
}
