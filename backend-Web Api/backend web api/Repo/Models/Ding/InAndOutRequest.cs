using Repo.Models.Public;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models.Ding
{
    [Table("InAndOutRequest", Schema = "Ding")]
    public class InAndOutRequest
    {
        public int Id { get; set; }
        [ForeignKey("user")]
        public int UserId { get; set; }
        public virtual User user { get; set; }
        public string Description { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime CreatedDate { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime RequestedDate { get; set; }
        public string Time { get; set; }
        public int Type { get; set; } // 1 => IN & 2 => OUT
    }
}
