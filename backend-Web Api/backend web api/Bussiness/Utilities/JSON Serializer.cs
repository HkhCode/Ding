using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
namespace Bussiness.Utilities
{
    public static class JSON_Serializer<T> where T : class
    {
        public static string Serialize(T obj)
        {
            return JsonConvert.SerializeObject(obj);
        }
        public static T Deserialize(string json)
        {
            return JsonConvert.DeserializeObject<T>(json);
        }
    }
}
