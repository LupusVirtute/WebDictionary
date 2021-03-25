using System;
using API.BackendLogic.Interfaces.Database;
using Dapper.Contrib.Extensions;
using WebDictionary.Abstract;

namespace API.BackendLogic.Abstract
{
    public abstract class UniqueSaveable : Saveable,IUnique
    {
	    public abstract override void Save();
		private String UserIDString { get; set; }
	    [ExplicitKey]
	    public Guid UID
	    {
		    get => UserIDString == null ? SetNewGuid() : new Guid(UserIDString);
		    set => UserIDString = value.ToString();
	    }

	    private Guid SetNewGuid()
	    {
		    Guid guid = Guid.NewGuid();
		    UserIDString = guid.ToString();
		    return guid;
	    }
    }
}
