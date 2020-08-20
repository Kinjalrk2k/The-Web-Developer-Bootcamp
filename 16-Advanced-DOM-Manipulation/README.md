## DOM Events
- Events are everywhere in a webpage
    - Clicking, hovering, draging-dropping, pressing keys
    

### Process
- Select an element
- Add an **event listener**
    - More than one event listener can be added.
    - Listeners execute in the order of declaration
- Inside of an listenser ```this``` keyword refers to the iteam on which the event occured

### Syntax
````js
element.addEventListener(type, functionToCall);
````

### Example
````js
var button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("Someone pressed this button!");
});
````

[MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)