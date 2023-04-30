using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.JSONs
{
    public class InAndOutJSON
    {
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string InTime { get; set; }
        public string OutTime { get; set; }
        public DateTime Date { get; set; }
    }
}
