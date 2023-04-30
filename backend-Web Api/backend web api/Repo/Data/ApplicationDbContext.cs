using Repo.Models;
using Repo.Models.Ding;
using Repo.Models.Public;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Data
{
    public class ApplicationDBContext : DbContext
    {
        public DbSet<User> users { get; set; }
        public DbSet<Branch> branches { get; set; }
        public DbSet<InAndOut> inAndOuts { get; set; }
        public DbSet<Report> reports { get; set; }
        public DbSet<VacationRequest> vacationRequests { get; set; }
        public DbSet<MissionRequest> missionRequests { get; set; }
        public DbSet<InAndOutRequest> InAndOutRequests { get; set; }
        public DbSet<Zone> zones { get; set; }
    }
}
