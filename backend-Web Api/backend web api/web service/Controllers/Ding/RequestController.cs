using Bussiness.JSONs;
using Bussiness.Managers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repo.Models.Ding;

namespace web_service.Controllers.Ding
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        private readonly RequestManager requestManager = new RequestManager();
        [HttpPost("VacationRequest")]
        public void AddVacationRequest(VacationRequestJSON VRJ)
        {
            DateTime CD = Convert.ToDateTime(VRJ.CreatedDate);
            DateTime RD = Convert.ToDateTime(VRJ.RequestedDate);
            requestManager.AddVacationRequest(new VacationRequest()
            {
                UserId = VRJ.UserId,
                CreatedDate = CD,
                RequestedDate = RD,
                Description = VRJ.Description,
                Type = VRJ.Type,
            });
        }
        [HttpPost("MissionRequest")]
        public void AddMissionRequest(MissionRequestJSON MRJ)
        {
            DateTime CD = Convert.ToDateTime(MRJ.CreatedDate);
            DateTime RD = Convert.ToDateTime(MRJ.RequestedDate);
            requestManager.AddMissionRequest(new MissionRequest()
            {
                UserId = MRJ.UserId,
                CreatedDate = CD,
                RequestedDate = RD,
                Description = MRJ.Description,
            });
        }
        [HttpPost("InAndOutRequest")]
        public void AddInAndOutRequest(InAndOutRequestJSON IAORJ)
        {
            DateTime CD = Convert.ToDateTime(IAORJ.CreatedDate);
            DateTime RD = Convert.ToDateTime(IAORJ.RequestedDate);
            requestManager.AddInAndOutRequest(new InAndOutRequest()
            {
                UserId=IAORJ.UserId,
                CreatedDate=CD,
                RequestedDate=RD,
                Description = IAORJ.Description,
                Time = IAORJ.Time,
                Type = IAORJ.Type,
            });
        }
    }
}
