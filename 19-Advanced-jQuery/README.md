## jQuery Events

### ```click()```
```js
// item with id 'submit'is clicked
$("#submit").click(function() {
    console.log("Another click");
})

// any button is clicked
$("button").click(function() {
    console.log("Someone clicked");
})

// change color of the clicked button
$("button").click(function() {
    // jQuery version of this
    $(this).css("color", "blue");
})
```

### ```keypress()```
- JS Charater codes:
    - given by ```which``` in the event object

```js
// event will hold informationa about the click event
$('input[type="text"]').keypress(function(event) {
    if (event.which === 13){    //  keycode of ENTER is 13
        console.log("You hit ENTER");
    }
})
```

### ```on()```
- Similar to ```.addEventListensner()``` of Vanilla JS

```js
$("#submit").on('click', function() {
    console.log("Another click");
})

// any button is clicked
$("button").on('click', function() {
    console.log("Someone clicked");
})
```

Other events inculdes:
- ```dblclick```: Double Click
- ```dragstart```: Mouse draging start

### ```click()``` vs ```on('click')```
- ```click()``` only add event listeners to the exsisting elements in the page
- ```on()``` applies to all potential future elements

## jQuery Effects
