using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string FamilyName { get; set; }
        public string Email { get; set;}
        public string PhoneNumber { get; set; }
        public string PersonnelCode { get; set; }
        public string Password { get; set; }
        [ForeignKey("ProfilePicture")]
        public Guid ProfilePictureId { get; set; }
        public Image ProfilePicture { get; set; }
        [ForeignKey("branch")]
        public Guid BranchId { get; set; }
        public Branch branch { get; set; }
        public virtual ICollection<VacationRequest> VacationRequests { get; set; }
        public virtual ICollection<MissionRequest> MissionRequests { get; set; }
        public virtual ICollection<InAndOutRequest> InAndOutRequests { get; set; }
        [ForeignKey("shift")]
        public Guid shiftId { get; set; }
        public Shifts shift { get; set; }
    }
}
