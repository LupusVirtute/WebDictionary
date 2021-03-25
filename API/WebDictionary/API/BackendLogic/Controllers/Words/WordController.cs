using System;
using System.Collections.Generic;
using System.IO;
using API.BackendLogic.Cache;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using WebDictionary.Models;

namespace WebDictionary.Controllers.Words
{
	[Route("api/Word")]
	[ApiController]
    public class WordController : ControllerBase
	{

        [HttpGet("[action]")]
	    public ActionResult<List<Word>> GetAllWords()
	    {
		    var cache = CacheList.Word;
		    return cache.GetAll();
	    }
		[HttpGet("{id}")]
	    public ActionResult<Word> GetWord(string id)
	    {
		    Guid guid = Guid.Parse(id);
		    var cache = CacheList.Word;
		    return cache.GetValue(guid);
	    }

	    [HttpPost("[action]")]
	    public void Update([FromBody]Word word)
	    {
		    CacheList.Word.Update(word);
	    }
		[HttpDelete("[action]")]
	    public void Delete([FromQuery]Word word)
	    {
			CacheList.Word.Delete(word);
	    }
	    [HttpPost("Insert")]
	    public ActionResult<Word> Insert(Word word)
	    {
		    CacheList.Word.Insert(word);
		    return word;
	    }
	    [HttpGet("[action]")]
	    public ActionResult<Word> GetRandom()
	    {
		    Word word = CacheList.Word.GetRandom();
		    return word;
	    }

	    [HttpGet("[action]")]
		public ActionResult<List<Word>> GetEnglish(string polish)
		{
			return CacheList.Word.GetEnglishCounterPart(polish);
		}

	}
}
