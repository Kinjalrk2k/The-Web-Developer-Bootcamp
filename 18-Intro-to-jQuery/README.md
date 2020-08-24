## jQuery

- jQuery is a DOM manipulation tool
- It is a JavaScript Library
- Capabilities
    - Select Elements
    - Manipulate Elements
    - Create Elements
    - Add event listeners
    - Animate Elements
    - Add effects
    - Make HTTP requests (AJAX)

### A Debate: Wheather to use jQuery or not?
[You Might Not Need jQuery](youmightnotneedjquery.com)

| Why to use? | Why Not to use? |
|-------------|-----------------|
| Fixes "broken" DOM API | DOM API is no longer "broken" |
| Clear, Short, Easy to use, AJAX | We can do everything even without jQuery |
| Cross browser support | Unnecessary dependancy - heavy! Performance can be an issue |
| Lot's of people use jQuery (A strong community!) | Lot's of people are moving from jQuery |

> Either way: It's worth knowing
> ~ Colt Steele

**Including jQuery:** Easy! Just a js file or CDN

### Selecting in jQuery
```js
$("selector")
```
- ```$```, aka jQuery is very similar to ```querySelectorAll``` in that we provide CSS style selector
- Always returns a list of selected elements, even if one

#### Examples
````js
// to select all image tags
$("img")

// to select all elements with class 'sale'
$(".sale")

// to select element with id 'bonus'
$("#bonus")

// to select all a tags in a li
$(" li a")
````

### Manipulating style
```js
$(selector).css(property, value)
```
- We can select multiple elements at once, and style them all together (as jQuery returns a *list*)

#### Examples
```js
// selecting elemnert with id 'special' and giving a border
$(".special").css("border", "2px solid red");

// or pass a object defining the styles
var styles = {
    backgroundColor: "pink",
    fontWeight: "bold"
};

$(".special").css(styles);
```

#### Bonus Example
```html
<div>Div 1</div>
<div>Div 2</div>
<div>Div 3</div>
```
For selecting the first ````<div>````
```js
// using a css psudo-class
$("div:first-of-type").css("color", "pink")

// built-in jQuery shortcut
// deprecated as of jQuery 3.4
$("div:first").css("color", "pink"); // this is a bit slower

// can be used in jQuery 3.4+
$("div").first().css("color", "blue"); // selects the first one
```

### Common jQuery methods
- ````val()````:
    - extract from input
    - same as ```value()``` in Vanilla JS
    - ```$(selector).val()```: returns the value  within *(getter)*
    - ```$(selector).val("new text")```: Sets the value of selected element to ```new text``` *(setter)*

- ````text()````: 
    - same as ```textContent``` in Vanilla JS
    - ```$(selector).text()```: returns the text within *(getter)*
    - ```$(selector).text("new text")```: Sets the text content of selected element to ```new text``` *(setter)*

- ````attr()````:
    - Get the attibute of the first matched
    - Set attributes to all matched elements
    - ```$(selector).attr("attribute")```: gets the attribute *(getter)*
    - ```$(selector).attr("attribute", "new-value")```: sets the attribute value *(setter)*

- ````html()````:
    - same as ```innerHTML``` in Vanilla JS
    - other properties same as ```.text()```

- ````addClass()````: same as ```.classList.add()``` but works on collections

- ````removeClass()````: same as ```.classList.remove()``` but works on collections

- ````toggleClass()````: same as ```.classList.toggle()``` but works on collections
