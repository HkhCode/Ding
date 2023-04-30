using Bussiness.JSONs;
using Bussiness.Managers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repo.Models.Ding;
using Repo.Models.Public;

namespace web_service.Controllers.Ding
{
    [Route("api/[controller]")]
    [ApiController]
    public class inandout : ControllerBase
    {
        private readonly InAndOutManager iauManager = new InAndOutManager();
        [HttpPost]
        public PreAndLeaveJSON InOrOutSubmit(PreAndLeaveJSON p)
        {
            InAndOut iau = new InAndOut { InOrOut = p.InOrOut, TakePicture = new byte[2], UserId = p.UserId, Date = p.Date, Time = p.Time };
            iauManager.AddInOrOut(iau);
            return new PreAndLeaveJSON()
            {
                Username = p.Username,
                InOrOut = p.InOrOut,
                Date = p.Date,
                Time = p.Time,
            };
        }
        [HttpPost("CheckInAndOut")]
        public List<string> CheckInAndOut(InAndOutCheckJSON x)
        {
            List<InAndOut> iau = iauManager.GetInAndOuts(x.UserId, x.date);
            if (iau.Count == 0)
            {
                return new List<string>() { "", "" };
            }
            else
            {
                string[] result = new string[2];
                foreach(var i in iau)
                {
                    if(i.InOrOut == 1)
                    {
                        result[0] = i.Time;
                    }
                    else if(i.InOrOut == 2)
                    {
                        result[1] = i.Time;
                    }
                }
                return result.ToList();
            }
        }
        //[HttpPost("getInAndOuts")]
        [HttpGet]
        public List<InAndOut> getInAndOuts()
        {
            List<InAndOut> inAndOuts = iauManager.GetSpecificInAndOuts( 1, new DateTime() , new DateTime()).ToList();
            return inAndOuts;
        }
    }
}
