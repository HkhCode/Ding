using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models
{
    public class Reports
    {
        public Guid Id { get; set; }
        [ForeignKey("user")]
        public Guid UserId { get; set; }
        public User user { get; set; }
        public DateTime ReportDate { get; set; }
        public string InTime { get; set; }
        public string OutTime { get; set; }
        public string WorkingHours { get; set; }

    }
}
