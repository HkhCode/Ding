using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness.Utilities
{
    public class TimePeriodCaculator
    {
        public string CalculateTimePeriod(string start , string end)
        {
            int startingHour = int.Parse(start.Substring(0, 2));
            int startingMinutes = int.Parse(start.Substring(3, 2));
            int endingHours = int.Parse(end.Substring(0, 2));
            int endingMinutes = int.Parse(end.Substring(3, 2));
            int starting = (startingHour * 60) + startingMinutes;
            int ending = (endingHours * 60) + endingMinutes;
            int Period = ending - starting;
            int Hours = (int)(Period / 60);
            int Minutes = (Period - (Hours * 60));
            string ConvertedPeriod = Hours.ToString() + ":" + Minutes.ToString();
            return ConvertedPeriod;
        }
    }
}
