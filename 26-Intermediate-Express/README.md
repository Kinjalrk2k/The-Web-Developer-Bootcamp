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

