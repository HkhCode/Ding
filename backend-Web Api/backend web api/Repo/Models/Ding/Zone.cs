using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models.Ding
{
    [Table("Zone", Schema = "Ding")]
    public class Zone : BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public int ZoneCode { get; set; }
        public string ZoneName { get; set; }
        public virtual ICollection<Branch> Branches { get; set; }
    }
}
