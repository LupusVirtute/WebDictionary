using System;
using System.Collections.Generic;
using System.Linq;
using API.BackendLogic.Database;
using API.BackendLogic.Interfaces.Database;
using Dapper;
using Dapper.Contrib.Extensions;
using WebDictionary.Interfaces.Database;
using WebDictionary.Models;

namespace API.BackendLogic.Abstract
{
    public abstract class DatabaseCache<T> : IDatabaseCache<T> 
	    where T : class,IUnique,ISaveable
    {
	    private Dictionary<Guid, T> _cacheDictionary = new Dictionary<Guid, T>();
	    protected readonly DatabaseConnectionHolder connectionHolder = new DatabaseConnectionHolder();
	    protected DatabaseCache()
	    {
			
	    }

	    private string GetTable(Type type)
	    {
		    TableAttribute customAttribute = type.GetCustomAttributes(typeof(TableAttribute),true).FirstOrDefault() as TableAttribute;
		    return customAttribute?.Name;
	    }
	    public void Update(T value)
	    {
		    using (var dbConnection = connectionHolder.Connect())
		    {
			    dbConnection.Update<T>(value);
		    }
	    }

	    public T GetRandom()
	    {
		    T value = null;


		    string selectionQuery = $"SELECT TOP 1 * FROM {GetTable(typeof(T))} ORDER BY newid()";
			using (var dbConnection = connectionHolder.Connect())
			{
				value = dbConnection.Query<T>(selectionQuery).ToList()[0];
			}

		    return value;
	    }
	    public void Insert(T value)
	    {
		    using (var dbConnection = connectionHolder.Connect())
		    {
			    dbConnection.Insert(value);
		    }
	    }

	    public void Delete(T value)
	    {
		    using (var dbConnection = connectionHolder.Connect())
		    {
			    dbConnection.Delete(value);
		    }
	    }

	    public T GetValue(Guid uid)
		{
			if (_cacheDictionary.TryGetValue(uid,out var value))
			{
				return value;
			}
			using (var dbConnection = connectionHolder.Connect())
		    { 
			    value = dbConnection.Get<T>(uid.ToString());
		    }

		    _cacheDictionary[uid] = value;
		    return value;
	    }
	    public List<T> GetAll()
	    {
		    List<T> value;
		    using (var dbConnection = connectionHolder.Connect())
		    {
			    value = dbConnection.GetAll<T>().ToList();
		    }

		    return value;
	    }
    }
}
