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
    [Table("Report", Schema = "Ding")]
    public class Report : BaseEntity
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("user")]
        public int UserId { get; set; }
        public virtual User user { get; set; }
        public DateTime ReportDate { get; set; }
        public string InTime { get; set; }
        public string OutTime { get; set; }
        public string WorkedTime { get; set; }
    }
}
