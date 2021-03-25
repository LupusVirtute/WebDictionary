using WebDictionary.Interfaces.Database;

namespace WebDictionary.Abstract
{
    public abstract class Saveable : ISaveable
    {
	    protected bool _isSaving;

	    public bool IsSaving()
	    {
		    return _isSaving;
	    }
	    public void CallSaveNextCycle()
	    {
		    _isSaving = true;
	    }

	    public abstract void Save();
    }
}
