# DOM (Document Object Model)

- The Document Object Model is the interface between Javascript and HTML+CSS
- Collection of specail JS Onbjects and mothods
- The browser converts every HTML tag to Javascript which can be modified
- Everything is stored within the _document_ object
- The top level object under which everything is contained is called the _document_

## Getting the document of a webpage

In the console:

- `document` - shows the html contents as text
- `console.dir(document)` - shows the document object

> There's so much in the DOM. Nested Objects, child noes,... uff!

## The Process

SELECT an element then MANIPULATE it

- Example **selecting** an `<h1>` tag:

```js
var h1 = document.querySelector("h1");
```

- Example **manipulating** an `<h1>` tag:

```js
h1.style.color = "pink";
```

## DOM Selectors

5 main methods:

- `document.getElementById()`
- `document.getElementsByClassName()`
- `document.getElementsByTagName()`
- `document.querySelector()`
- `document.querySelectorAll()`

> - Elements means multiple elements. It returns an array, even if one element with the tag/class is present!
> - querySelector uses CSS selectors
> - querySelector returns the 1st element only, while querySelectorAll returns all occurences as a list

## Demonstration HTML

```html
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
```

## Selector demonstration

| Code                                        | Output                                                                                                              | Returns                       |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `document.getElementById("highlighted")`    | `<li id="highlighted">List item 1</li>`                                                                             | JS Object                     |
| `document.getElementsByClassName("bolded")` | `[<li class="bolded">List item 2</li>, <li class="bolded">List item 3</li>]`                                        | `HTMLCollection` of JS Object |
| `document.getElementByTagName("li")`        | `[<li id="highlighted">List item 1</li>, <li class="bolded">List item 2</li>, <li class="bolded">List item 3</li>]` | `HTMLCollection` of JS Object |
| `document.querySelector("#highlighted")`    | `<li id="highlighted">List item 1</li>`                                                                             | JS Object                     |
| `document.querySelector(".bolded")`         | `<li id="bolded">List item 2</li>`                                                                                  | JS Object                     |
| `document.querySelectorAll("h1")`           | `[<h1>Hello</h1>, <h1>Goodbye</h1>]`                                                                                | `HTMLCollection` of JS Object |

## DOM Manipulation

### style

```js
// SELECT
var tag = document.getElementById("highlighted");

// MANIPULATE
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
```

> The right side should always be in "quotes"

> The speration of concerns - HTML, CSS, JS should be used with their own concerns

#### An Alternative (better)

```css
/* defining a css class with a set of styles */
.some-class {
  color: blue;
  border: 10px solid red;
  font-size: 70px;
  background: yellow;
  margin-top: 20px;
}
```

```js
var tag = document.getElementById("highlighted");

// adding the new class to the classlist
tag.classList.add("some-class");
```

### classList

```js
var tag = document.getElementById("h1");

// adds a class
tag.classList.add("another-class");

// removes a class
tag.classList.remove("another-class");

// toggles a class - removes if present, adds if absent
tag.classList.toggle("another-class"); // very useful!
```

### textContent

- Change the HTML
- Text is anything between the tags and not including the html tags
- It might go any no. of layers deep but extracts text only
- Treats strings as text, not HTML

```html
<p>This is an <strong>awesome</strong> paragraph</p>
```

```js
var tag = document.querySelector("p");

// retriving
tag.textContent; // "This is an awesome paragraph"

// altering
tag.textContent = "blah blah blah"; // overwrites <strong> tag
```

### innerHTML

- Same as `textContent` but preserves the html tags
- Treats string as HTML

```html
<p>This is an <strong>awesome</strong> paragraph</p>
```

```js
var tag = document.querySelector("p");

// retriving
tag.textContent; // "This is an <strong>awesome</strong> paragraph"

// altering
tag.textContent = "blah blah blah"; // overwrites <strong> tag
```

### Attribute
- Using ```getAttribute()``` and ```setAttribute()```
````html
<a href="www.google.com">I am a link</a>
<img src="logo.png">
````
````js
var link = document.querySelector("a");
link.getAttribute("href");  //"www.google.com"
//CHANGE HREF ATTRIBUTE
link.setAttribute("href", "www.dogs.com"); 
//<a href="www.dogs.com">I am a link</a>

//TO CHANGE THE IMAGE SRC
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
//<img src="corgi.png">
````

