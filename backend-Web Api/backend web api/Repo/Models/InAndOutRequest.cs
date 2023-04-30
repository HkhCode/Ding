using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models
{
    public class InAndOutRequest
    {
        public Guid Id { get; set; }
        public int InOrOut { get; set; }
        [ForeignKey("user")]
        public Guid UserId { get; set; }
        public User user { get; set; }
        public DateTime Date { get; set; }
        public string Time { get; set; }
        public string Description { get; set; }
    }
}
