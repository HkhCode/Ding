using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models
{
    public class MissionRequest
    {
        public Guid Id { get; set; }
        public string Description { get; set; }
        [ForeignKey("user")]
        public Guid UserId { get; set; }
        public User user { get; set; }
        public DateTime MissionRequestDate { get; set; }
    }
}
