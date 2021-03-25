using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using WebDictionary;

namespace API.BackendLogic.Database
{
    public class DatabaseConnectionHolder
    {
	    static readonly string connection = Startup.GlobalConf.GetConnectionString("dbconnection");
	    private string _connectionString;
	    public DatabaseConnectionHolder()
	    {
		    _connectionString = connection;
	    }

	    public IDbConnection Connect()
	    {
		    var connection = new SqlConnection(_connectionString);
			connection.Open();
			return connection;
	    }
    }
}
