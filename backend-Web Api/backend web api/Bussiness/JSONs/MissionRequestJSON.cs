using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.JSONs
{
    public class MissionRequestJSON
    {
        public int UserId { get; set; }
        public string Description { get; set; }
        public DateTime RequestedDate { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
