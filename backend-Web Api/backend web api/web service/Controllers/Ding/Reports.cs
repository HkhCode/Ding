using Bussiness.JSONs;
using Bussiness.Managers;
using Bussiness.Utilities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repo.Models.Ding;

namespace web_service.Controllers.Ding
{
    [Route("api/[controller]")]
    [ApiController]
    public class Reports : ControllerBase
    {
        private readonly InAndOutManager iauManager = new InAndOutManager();
        [HttpPost]
        public List<ReportJSON> GetSpecificReports(ReportJSON reportJSON)
        {
            //iauManager.GetSpecificInAndOuts()
            return new List<ReportJSON>();
        }
    }
}
