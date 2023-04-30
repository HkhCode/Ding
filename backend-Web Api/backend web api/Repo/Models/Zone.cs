using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models
{
    public class Zone
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int ZoneNumber { get; set; }
        public virtual ICollection<Branch> Branches { get; set; }
    }
}
