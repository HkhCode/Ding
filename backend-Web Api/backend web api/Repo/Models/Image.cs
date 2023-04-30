using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Models
{
    public class Image
    {
        public Guid Id { get; set; }
        public byte[] ImageData { get; set; }
        public string ImageFormat { get; set; }
    }
}
