using Bussiness.JSONs;
using Bussiness.Unit_Of_Work;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repo.Models.Public;

namespace web_service.Controllers.Ding
{
    [Route("api/[controller]")]
    [ApiController]
    public class test : ControllerBase
    {
        private UserManager u = new UserManager();
        [HttpGet]
        public userJSON getUser()
        {
            User user = u.getUser(3);
            return new userJSON() { Id = user.Id, Email = user.PersonellCode, Username = user.FullName };
        }
    }
}
