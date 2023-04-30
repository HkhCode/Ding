using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models
{
    public class VacationRequest
    {
        public Guid Id { get; set; }
        public DateTime VacationRequestDate { get; set; }
        public int VacationType { get; set; }
        public string Description { get; set; }
        [ForeignKey("user")]
        public Guid UserId { get; set; }
        public User user { get; set; }
        public int Status { get; set; }
    }
}
