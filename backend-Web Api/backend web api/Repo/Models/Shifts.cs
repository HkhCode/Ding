using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models
{
    public class Shifts
    {
        public Guid Id { get; set; }
        public string Day { get; set; }
        public string Date { get; set; }
        public string HourStart { get; set; }
        public string HourEnd { get; set; }
        public string ShiftDuration { get; set; }
        public string InReperesentation { get; set; }
        public string OutRepresentation { get; set; }
        public string MoreWorkStart { get; set; }
        public string MoreWorkDuration { get; set; }
        public string DayOfWork { get; set; }
        public string VacationTitle { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }
    }
}
