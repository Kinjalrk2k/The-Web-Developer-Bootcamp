## Intermediate Express

### Templates and EJS
- Templates are dynamic HTML files
- Uses ```res.render(file.ejs)```
- Store the files in the ```views``` directory. Express automatically checks that directory

## EJS
- EJS stands for Embedded JavaScript
-   ```npm install ejs --save```
- Lets us embed JS code in HTML
- Pass in variables through an object in the 2nd parameter of ```res.render()```
- Refractoring
    - ```app.set("view engine", "ejs")```
    - No need to write ```.ejs``` in ```res.render()``` anyome

### Control flow in in EJS
- Wrap each lines with EJS tags
- EJS Tags
    - ```<%=  %>``` - the code retured from the code will be displayed in the html file
    - ```<%  %>``` - just runs the code, no output

### Style
- We can write a external style sheet for our site in the ```public``` directory
- Express just serves the ```views``` directory by default
- ```app.use(express.static("directory"))``` to serve directory

### Partials
- Reduces redundancies
- Partials are templates which we can include on other templates
- Use ```views/partials``` as the directory to store all the partials
- ```<% include partial-filename %> ``` - deprecated
- ```<%- include('partials/filename.ejs') %>``` - use this

### POST requests
- We use POST request when we are adding data
- Used in forms
- ```<form action="/POSTrouteName" method="POST">```
- ```name``` attribute in the input tag is the key (a property) in the body of the request

### Body Parser
- Express doesn't make ```req.body``` automatically. We have to explicitly tell Express to form a JS Object using that
- ```npm install body-parser --save```
- BodyParser is used to extract data
- ```app.use(bodyParser.urlencoded({ extended: true }));``` #TODO: Lookup about this!
