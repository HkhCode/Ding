using Repo.Data;
using Repo.Models.Ding;
using Repo.Models.Public;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.Managers
{
    public class RequestManager
    {
        private readonly ApplicationDBContext context = new ApplicationDBContext();
        public void AddVacationRequest(VacationRequest VR)
        {
            context.vacationRequests.Add(VR);
            context.SaveChanges();
        }
        public void AddMissionRequest(MissionRequest MR)
        {
            context.missionRequests.Add(MR);
            context.SaveChanges();
        }
        public void AddInAndOutRequest(InAndOutRequest IAOM)
        {
            context.InAndOutRequests.Add(IAOM);
            context.SaveChanges();
        }
        public List<VacationRequest> GetAllVacationRequests()
        {
            return context.vacationRequests.ToList();
        }
        public List<MissionRequest> GetAllMissionRequests()
        {
            return context.missionRequests.ToList();
        }
        public List<InAndOutRequest> GetAllInAndOutRequests()
        {
            return context.InAndOutRequests.ToList();
        }
        public List<VacationRequest> GetUsersVacationRequests(int UserId)
        {
            return context.vacationRequests.Where(x => x.UserId == UserId).ToList();
        }
        public List<MissionRequest> GetUsersMissionRequests(int UserId)
        {
            return context.missionRequests.Where(x => x.UserId == UserId).ToList();
        }
        public List<InAndOutRequest> GetUsersInAndRequests(int UserId)
        {
            return context.InAndOutRequests.Where(x => x.UserId == UserId).ToList();
        }
    }
}

