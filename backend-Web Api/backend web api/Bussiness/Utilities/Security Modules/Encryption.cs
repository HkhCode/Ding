using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.Utilities.Security_Modules
{
    public class Encryption
    {
        private static List<string> _AddingElements = new List<string>()
        {
            "!","@","#","$","%","X","Z","W"
        };
        private static Dictionary<int, int> SwitchingIndexes = new Dictionary<int, int>()
        {
            [0] = 1,
            [2] = 3,
            [4] = 5,
            [6] = 7,
            [8] = 9,
            [10] = 11,
            [12] = 13,
            [14] = 15,
        };
        private static string _AddingCharFirst;
        private static string _AddingCharSecond;
        public static string Reverse(string s)
        {
            char[] charArray = s.ToCharArray();
            Array.Reverse(charArray);
            return new string(charArray);
        }
        public static string Encrypt(string Key)
        {
            string result = "";
            for (int i = 0; i < Key.Length; i++)
            {
                switch (i % 8)
                {
                    case 0:
                        _AddingCharFirst = _AddingElements[0];
                        _AddingCharSecond= _AddingElements[7];
                        break;
                    case 1:
                        _AddingCharFirst = _AddingElements[1];
                        _AddingCharSecond = _AddingElements[6];
                        break;
                    case 2:
                        _AddingCharFirst = _AddingElements[2];
                        _AddingCharSecond = _AddingElements[5];
                        break;
                    case 3:
                        _AddingCharFirst = _AddingElements[3];
                        _AddingCharSecond = _AddingElements[4];
                        break;
                    case 4:
                        _AddingCharFirst = _AddingElements[4];
                        _AddingCharSecond = _AddingElements[3];
                        break;
                    case 5:
                        _AddingCharFirst = _AddingElements[5];
                        _AddingCharSecond = _AddingElements[2];
                        break;
                    case 6:
                        _AddingCharFirst = _AddingElements[6];
                        _AddingCharSecond = _AddingElements[1];
                        break;
                    case 7:
                        _AddingCharFirst = _AddingElements[7];
                        _AddingCharSecond = _AddingElements[0];
                        break;
                    default:
                        throw new Exception("UnHandled Module Error");
                }
                //if(i%2 == 0) 
                //    Key.Replace(Key[i] , Key[SwitchingIndexes[i]]);
                if (i % 2 == 0)
                {
                    result += _AddingCharFirst + Key[SwitchingIndexes[i]] + _AddingCharSecond;
                }
                else
                {
                    foreach (int j in SwitchingIndexes.Keys)
                    {
                        if (SwitchingIndexes[j] == i)
                        {
                            result += _AddingCharFirst + Key[j] + _AddingCharSecond;
                        }
                    }
                }
            } // test => etts     FIXED
            // adding odds
            return result;
        }
        public static string Decrypt(string Key)
        {
            int StartingIndex;
            int AddingToIndex = 3;
            if (Key.Length % 3 == 0)
            {
                StartingIndex = 1;
            }
            else if (Key.Length % 3 == 1)
            {
                StartingIndex = 2;
            }
            else
            {
                StartingIndex = 0;
            }
            string result = "";
            for (int i = StartingIndex; i < Key.Length; i += AddingToIndex)
            {
                result += Key[i];
            }
            string res = "";
            for(int i = 0;i < result.Length;i++) 
            {
                if(i%2 ==0) { res += result[SwitchingIndexes[i]]; }
                else
                {
                    foreach(int j in SwitchingIndexes.Keys)
                    {
                        if (SwitchingIndexes[j] == i)
                        {
                            res += result[j];
                        }
                    }
                }
            }
            return res;
        }
    }
}
