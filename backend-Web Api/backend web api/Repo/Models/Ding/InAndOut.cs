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
    [Table("InAndOut", Schema = "Ding")]
    public class InAndOut : BaseEntity
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime Date { get; set; }
        public string Time { get; set; }
        public int InOrOut { get; set; }
        [ForeignKey("user")]
        public int UserId { get; set; }
        public virtual User user { get; set; }
        public byte[] TakePicture { get; set; }

    }
}
