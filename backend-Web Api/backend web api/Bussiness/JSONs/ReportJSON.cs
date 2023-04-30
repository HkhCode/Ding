using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.JSONs
{
    public class ReportJSON
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime Date { get; set; }
        public string Time { get; set; }
        public int InOrOut { get; set; }
    }
}
