using System;
using API.BackendLogic.Abstract;
using API.BackendLogic.Cache;
using Dapper.Contrib.Extensions;
using WebDictionary.Abstract;
using WebDictionary.Interfaces;

namespace WebDictionary.Models
{
	[Table("Words")]
    public class Word : UniqueSaveable,IWord
    {
	    public string PolishWord { get; set; }
	    public string EnglishWord { get; set; }
	    public override void Save()
	    {
		    if (IsSaving())
		    {
			    CacheList.Word.Update(this);
			    _isSaving = false;
		    }
	    }
    }
}
