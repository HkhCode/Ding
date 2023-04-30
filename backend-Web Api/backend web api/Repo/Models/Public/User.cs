using Repo.Models.Ding;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models.Public
{
    [Table("User", Schema = "Pub")]
    public class User : BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public string FullName { get; set; }
        public string PersonellCode { get; set; }
        public string NationalCode { get; set; }
        public DateTime BirthDate { get; set; }
        [ForeignKey("branch")]
        public int BranchId { get; set; }
        public virtual Branch branch { get; set; }
        public byte[] ProfileImage { get; set; }
        public virtual ICollection<Report> Reports { get; set; }
        public virtual ICollection<VacationRequest> VacationRequests { get; set; }
        public virtual ICollection<MissionRequest> MissionRequests { get; set; }
        public virtual ICollection<InAndOutRequest> InAndOutRequests { get; set; }
    }
}

