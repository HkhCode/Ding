using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models
{
    public class InAndOut
    {
        public Guid Id { get; set; }
        [ForeignKey("user")]
        public Guid? UserId { get; set; }
        public User user { get; set; }
        [ForeignKey("image")]
        public Guid ImageId
        {
            get; set;
        }
        public Image image { get; set; }
        public int InOrOut { get; set; }
    }
}
