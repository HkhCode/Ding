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
    public class InAndOutManager
    {
        private readonly ApplicationDBContext context;
        public InAndOutManager()
        {
            context = new ApplicationDBContext();
        }
        public void AddInOrOut(InAndOut iau)
        {
            context.inAndOuts.Add(iau);
            context.SaveChanges();
        }
        public List<InAndOut> GetInAndOuts(int UserId , DateTime date)
        {
            return context.inAndOuts.Where(x => x.UserId == UserId && x.Date.Date == date.Date).ToList();
        }
        public List<InAndOut> GetSpecificInAndOuts(int UserId , DateTime startDate , DateTime endDate)
        {
            return context.inAndOuts.Where(x => x.UserId == UserId && (x.Date.Date <= endDate.Date && x.Date.Date >= startDate.Date)).ToList();
        }
    }
}
