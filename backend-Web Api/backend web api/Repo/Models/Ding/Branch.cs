using Repo.Models.Public;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models.Ding
{
    [Table("Branch" ,Schema = "Ding")]
    public class Branch : BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public string BranchName { get; set; }
        [ForeignKey("zone")]
        public int ZoneId { get; set; }
        public virtual Zone zone { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
