using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.JSONs
{
    public class PreAndLeaveJSON
    {
        public int InOrOut { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; }
        public DateTime Date { get; set; }
        public string Time { get; set; }
    }
}
