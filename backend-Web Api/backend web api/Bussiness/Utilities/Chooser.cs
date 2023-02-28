using Repo.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bussiness.Utilities
{
    public class Chooser
    {
        private ApplicationDbContext _context;
        private List<string> Alpha_Upper = new List<string>() { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" };
        private List<string> Alpha_Lower = new List<string>() { "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" };
        private List<int> Numbers = new List<int>() { 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 };
        private List<string> SpecialChars = new List<string>() { "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "?" };
        private Random random = new Random();
        public Chooser(ApplicationDbContext context)
        {
            _context = context;
        }
        public static int getRandomNumber(Random random)
        {
            return random.Next(0, 7);
        }
        // needs Edit ================ //
        public static void CheckAndEdit(List<string> specialChars)
        {
            specialChars.ForEach(element =>
            {
                List<string> temp = specialChars;
                temp.Remove(element);
                temp.Contains(element);
            });
        }
        // needs Edit ================ //
        public void setSpecialCharsAndIndexes()
        {
            Random rand = new Random();
            List<string> specialChars = new List<string>();
            for (int i = 0; i < 8; i++)
            {
                int number = getRandomNumber(random);
                if (i < 2)
                {
                    specialChars.Add(Alpha_Upper[number]);
                }
                else if (i > 1 && i < 4)
                {
                    specialChars.Add(Alpha_Lower[number]);
                }
                else if (i > 3 && i < 6)
                {
                    specialChars.Add(Numbers[number].ToString());
                }
                else
                {
                    specialChars.Add(SpecialChars[number]);
                }
            }
            Dictionary<int, int> switchingIndexes = new Dictionary<int, int> { { 0, 0 }};
        }
    }
}
