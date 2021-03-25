using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

namespace API.BackendLogic.Utils
{
    public static class StringUtils
    {
	    private static Dictionary<string, string> replaceDictionary = new Dictionary<string, string>()
	    {
		    {"ą", "a"},
		    {"ę", "e"},
		    {"ó", "o"},
		    {"ć", "c"},
		    {"ł", "l"},
		    {"ń", "n"},
		    {"ś", "s"},
		    {"ź", "z"},
		    {"ż", "z"}
	    };
		public static string RemoveDiacritics(this string text)
		{
			if (string.IsNullOrWhiteSpace(text))
				return text;
			text = text.ToLower();
			foreach (var pair in replaceDictionary)
			{
				text = text.Replace(pair.Key, pair.Value);
			}
			return text;
		}
	}
}
