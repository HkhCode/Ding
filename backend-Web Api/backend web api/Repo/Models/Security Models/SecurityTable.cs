using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models.Security_Models
{
    [Table("Security Keys")]
    public class SecurityTable
    {
        [Key]
        public Guid Id { get; set; }
        public string SelectedChars { get; set; }
        public string SwitchingIndexesKeys { get; set; }
        public string SwitchingIndexesValues { get; set; }
        public DateTime RegisteredTime { get; set; }
    }
}
