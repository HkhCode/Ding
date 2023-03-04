using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.Utilities.Security_Modules
{
    public class Key_Generator
    {
        private Dictionary<int, int> _MainKey;
        public Key_Generator(Dictionary<int , int> MainKey) 
        {
            _MainKey = MainKey;
        }
        public Dictionary<int , int> KeyConverter(int length)
        {
            float Ratio = (float)length / 16;
            int count;
            Queue<int> temp = new Queue<int>();
            HashSet<int> added_elements = new HashSet<int>();
            Dictionary<int,int> result = new Dictionary<int, int>();
            added_elements.Add(0);
            foreach(KeyValuePair<int, int> pair in _MainKey)
            {
                count = added_elements.Count;
                added_elements.Add((int)((pair.Key+1)*Ratio));
                if (count != added_elements.Count)
                {
                    temp.Enqueue((int)((pair.Key+1)*Ratio));
                }
                if(temp.Count == 0) 
                {
                    result.Add(temp.Dequeue() - 1, temp.Dequeue() - 1);
                }
                count = added_elements.Count;
                added_elements.Add((int)((pair.Key + 1) * Ratio));
                if(count != added_elements.Count)
                {
                    temp.Enqueue((int)((pair.Value+1)*Ratio));
                }
                if(temp.Count == 2)
                {
                    result.Add(temp.Dequeue()-1,temp.Dequeue() - 1);
                }
            }
            return result;
        }
    }
}
