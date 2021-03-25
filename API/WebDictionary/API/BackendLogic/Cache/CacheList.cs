using API.BackendLogic.Interfaces.Database;
using WebDictionary.Models;

namespace API.BackendLogic.Cache
{
    public static class CacheList
    {
	    public static WordCache Word { get; } = new WordCache();
    }
}
