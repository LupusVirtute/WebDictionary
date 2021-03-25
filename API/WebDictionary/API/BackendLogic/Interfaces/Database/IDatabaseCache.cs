using System;
using System.Collections.Generic;
using WebDictionary.Interfaces.Database;

namespace API.BackendLogic.Interfaces.Database
{
    public interface IDatabaseCache<T> where T : class,IUnique,ISaveable
    {
	    void Update(T value);
	    void Insert(T value);
	    void Delete(T value);
	    T GetValue(Guid uid);
	    T GetRandom();
	    List<T> GetAll();

    }
}
