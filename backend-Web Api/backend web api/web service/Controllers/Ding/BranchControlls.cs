using Bussiness.JSONs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace web_service.Controllers.Ding
{
    [Route("api/[controller]")]
    [ApiController]
    public class BranchControlls : ControllerBase
    {
        [HttpGet]
        public branchJSON getCurrentBranch(int x , int y)
        {
            return new branchJSON() {Id = new Guid() , Name="اپال" , PositionX=1 , PositionY=1};
        }
    }
}
