using System.Collections.Generic;
using System.Linq;
using API.BackendLogic.Abstract;
using API.BackendLogic.Utils;
using Dapper;
using WebDictionary.Models;

namespace API.BackendLogic.Cache
{
    public class WordCache : DatabaseCache<Word>
    {
	    public string VerifyIfWordExists(string fromWord)
	    {
		    if (fromWord == null)
		    {
			    return "ERROR";
		    }
		    fromWord = fromWord.ToLower();
		    string selectionQuery = "SELECT PolishWord,EnglishWord FROM Words WHERE EnglishWord = @fromWord";
		    List<Word> words = new List<Word>();
		    using (var dbConnection = connectionHolder.Connect())
		    {
			    words = dbConnection.Query<Word>(selectionQuery,new {fromWord}).ToList();
		    }

		    return words[0].PolishWord;
	    }
	    public List<Word> GetEnglishCounterPart(string polish)
	    {
		    if (polish == null)
		    {
			    return null;
		    }
		    polish = polish.RemoveDiacritics();
			List<Word> words = GetAll();
			List<Word> correctSet = new List<Word>();
			foreach (var word in words)
			{
				string modifiedWord = word.PolishWord.RemoveDiacritics().ToLower();
				if (modifiedWord.Contains(polish))
				{
					correctSet.Add(word);
				}
			}

			return correctSet;
	    }
    }
}
