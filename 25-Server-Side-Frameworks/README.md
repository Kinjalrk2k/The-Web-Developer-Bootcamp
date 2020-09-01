## Express

### Framework
Framework is like a library, but:
- Inversion on control:
    - Call a library - You're in control
    - Call a framework - The framework calls you! (Inversion of control)
    - there's just a bunch of predefined white spots that you can fill out with your code
    - A library on the other hand is a collection of functionality that you can call.

### Express
- Express is a node + web development framework
- Lightweight framework - we have got more control
- Great first time learning framework
- Large community

### Routes
- Codes to listen/receive the HTTP requests
- Runs some code depending on the request

## NPM Packages

### ```package.json```
- More like ```requirements.txt```
- Has got all the metadata like
    - GitHub URL
    - Contributors
    - Keywords
    - **Dependencies** with versions
- ```--save``` flag in ```npm install```
    - copies the metadata to our own ```package.json``` (appends dependencies)
- ```npm init``` - walks through the creation of a ```package.json``` interactively through the terminal

## Routing
- ```*``` route fallbacks here when we get any route other than the defined ones.
- It's the ```404 page``` dude!
- Put this route at the last, or else it will override all other routes

### Order of routes
- It matters
- The first route which matches only gets executed 

### Route Params
- Patterns in routes
- Use ```"/r/:variableName"``` as the route for a route of any name. Anything that starts with ```/r/``` and not within another ```/```
- This is simply pattern matching
- Extracting the variable:
    - ```req.params``` (req is the request object in the route's callback function)
    - This gets a JSObject with the variable name (in the route pattern) as key and the variable as value