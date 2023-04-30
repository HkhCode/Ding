using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.JSONs
{
    public class VacationRequestJSON
    {
        public int UserId { get; set; }
        public string Description { get; set; }
        public int Type { get; set; }
        public DateTime RequestedDate { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
