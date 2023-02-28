using Repo.Models.Security_Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext() : base("mainCS")
        {

        }
        public DbSet<SecurityTable> SecurityKeys { get; set; }
    }
}
