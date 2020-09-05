The Open Movie Data Base Movie API that we'll be using the next set of lectures has recently gone private. 

In response to this, Colt has acquired an API key for everyone to use.

Here's the new way of making requests with the key:

General search: ```http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb ```

Search with Movie ID: ```http://www.omdbapi.com/?i=tt3896198&apikey=thewdb ```

So everything is exactly the same as Colt explains in the following videos, except you must append &apikey=thewdb to the end of your url.

In your code, using string concatenation, that will look like this:
```"http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"```

Or, with a more modern approach, using a template literal:
```http://www.omdbapi.com/?s=${query}&apikey=thewdb```
