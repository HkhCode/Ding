using Repo.Data;
using Repo.Models.Public;
using Repo.Utilites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.Unit_Of_Work
{
    public class UserManager
    {
        private readonly ApplicationDBContext context;
        public UserManager()
        {
            context = new ApplicationDBContext();
        }
        public User getUser(int id)
        {
            return context.users.Find(id);
        }
    }
}
