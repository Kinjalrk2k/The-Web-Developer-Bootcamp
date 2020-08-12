# DOM (Document Object Model)

- The Document Object Model is the interface between Javascript and HTML+CSS
- Collection of specail JS Onbjects and mothods
- The browser converts every HTML tag to Javascript which can be modified
- Everything is stored within the *document* object
- The top level object under which everything is contained is called the *document*

## Getting the document of a webpage
In the console:
- ```document``` - shows the html contents as text
- ```console.dir(document)``` - shows the document object

> There's so much in the DOM. Nested Objects, child noes,... uff!

## The Process
SELECT an element then MANIPULATE it
- Example **selecting** an ```<h1>``` tag:
````js
var h1 = document.querySelector("h1");
````
- Example **manipulating** an ```<h1>``` tag:
````js
h1.style.color = "pink";
````

## DOM Selectors
5 main methods:
- ```document.getElementById()```
- ```document.getElementsByClassName()```
- ```document.getElementsByTagName()```
- ```document.querySelector()```
- ```document.querySelectorAll()```

> - Elements means multiple elements. It returns an array, even if one element with the tag/class is present!
> - querySelector uses CSS selectors
> - querySelector returns the 1st element only, while querySelectorAll returns all occurences as a list

## Demonstration HTML
````html
<html>
  <head>
    <title>Selectors Intro</title>
  </head>
  <body>
    <h1>Hello</h1>
    <h1>Goodbye</h1>

    <ul>
      <li id="highlighted">List item 1</li>
      <li class="bolded">List item 2</li>
      <li class="bolded">List item 3</li>
    </ul>
  </body>
</html>
````

## Selector demonstration
| Code                                                 | Output | Returns |
|--------------------------------------------------------|------| ------- |
| ```document.getElementById("highlighted")``` | ```<li id="highlighted">List item 1</li>``` | JS Object |
| ```document.getElementsByClassName("bolded")```      | ```[<li class="bolded">List item 2</li>, <li class="bolded">List item 3</li>]```     | ```HTMLCollection``` of JS Object |
| ```document.getElementByTagName("li")``` | ```[<li id="highlighted">List item 1</li>, <li class="bolded">List item 2</li>, <li class="bolded">List item 3</li>]``` | ```HTMLCollection``` of JS Object |
| ```document.querySelector("#highlighted")``` | ```<li id="highlighted">List item 1</li>``` | JS Object |
| ```document.querySelector(".bolded")``` | ```<li id="bolded">List item 2</li>``` | JS Object |
| ```document.querySelectorAll("h1")``` | ```[<h1>Hello</h1>, <h1>Goodbye</h1>] ``` | ```HTMLCollection``` of JS Object |


