using System.Threading;

namespace WebDictionary.Interfaces.Database
{
    public interface ISaveable
    {
	    bool IsSaving();
	    void CallSaveNextCycle();
	    void Save();
    }
}
