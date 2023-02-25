using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.Utilities
{
    public class Encryption
    {
        private static List<string> _Alphabets_Cap = new List<string>()
        {
            "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
        };
        private static List<string> _Numbers = new List<string>()
        {
            "1","2","3","4","5","6","7","8","9","0"
        };
        private List<string> _SpcialChars = new List<string>()
        {
            "!","@","#","$","%","^","&","*","(",")"
        };
        private static List<string> _AddingElements = new List<string>()
        {
            "!","@","#","$","%","X","Z","W","Y"
        };
        private static string _AddingCharFirst = "";
        private static string _AddingCharSecond = "";
        public static string Encrypt(string Key , string Value)
        {
            string result ="";
            for(int i = Key.Length;i>0;i--)
            {
                if (i % 2 == 0)
                {
                    result += _AddingCharFirst + Key[i] + _AddingCharSecond;
                }
                else
                {
                    result += _AddingCharSecond + Key[i] + _AddingCharFirst;
                }
            }
            return "";
        }
        public static string Decrypt(string Key , string Value)
        {
            return "";
        }
    }
}
