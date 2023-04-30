using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models
{
    public class Branch
    {
        public Guid Id { get; set; }
        public string BranchName { get;set; }
        [ForeignKey("zone")]
        public Guid ZoneId { get; set; }
        public Zone zone { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
