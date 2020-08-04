# Objects
#### Javascript objects *LOOK LIKE PYTHON DICTIONARY*
They can store any kind of data: numbers, arrays, other objects...!

## Declaring an Object
````js
var dog = {
    name: "Rusty",  //  he's the the best dog ;)
    breed: "Mutt",
    age 3
}
````

## Retrieve data from Object
Two ways to retrieve data:
- Bracket Notation
    ````js
    dog["age"]
    ````
- Dot Notation
    ````js
    dog.age
    ````

## Difference between notations
- Dot notation cannot be used if the property name starts with a number.
    ```js
    someObject.1blah    //  invalid
    someObject["1blah"] //  valid
    ```
- Dot notation cannot be used if the property name has a space within in.
    ```js
    someObject.fav color    //  invalid (essentally, 2 tokens)
    someObject["fav color"] //  valid
    ```
- Dot noation cannot used for lookup
    ````js
    var str = "name";
    someObject.str  //  doesn't lookup for "name" property
    someObject[str] //  evaluates str and looks for property "name"
    ````

## Update data
Both dot and bracket notation can be used
````js
var person = {
    name: "Travis",
    age: 21,
    city: "LA"
}

person["age"] += 1;
person.city = "London";
````

## Creating Objects
- Make empty object and add it
    ````js
    var person = {} //  empty
    person.name = "Travis";
    person.age = 21;
    person.city = "LA";
    ````
- All at once
    ````js
    var person = {
        name: "Travis",
        age: 21,
        city: "LA"
    }
    ````
- Make empty object and add it
    ````js
    var person = new Object();  //  empty
    person.name = "Travis";
    person.age = 21;
    person.city = "LA";
    ````

## Arrays Vs Objects
|   |   Arrays |    Objects |
|   --- |   ---    |   ---    |
|   Indexing    |   Indexed |   Key-value paired (known as ```dictionary``` in some programming languages)    |
|   Ordering    |   Ordered |   Unordered   |
|   Declaring   |   <pre><code class="js">var dogs = {"Rusty", "Lucky", "Bubba"}</code></pre>   |   <pre><code class="js">var dog = {<br>    name: "Bubba",<br>    breed: "Lab"<br>}</code></pre> 
|   Accessing   |   <pre><code class="js">dogs[1];</code></pre>     |  <pre><code class="js">dog.name;</code></pre>     |
|   Inserting   |    <pre><code class="js">dogs.push("Wyatt");</code></pre>     |   <pre><code class="js">dog.age = 6;</code></pre>     |
|   Modifying   |   <pre><code class="js">dogs[1] = "Lucy";</code></pre>    |   <pre><code class="js">dog.breed = "Black lab";</code></pre>     |

<!-- Array code:
````js
var dogs = {"Rusty", "Lucky", "Bubba"}
dogs[1];
dogs.push("Wyatt");
dogs[1] = "Lucy";
````    

Object code:
````js
var dog = {
    name: "Bubba",
    breed: "Lab"
}
dog.name;
dog.age = 6;
dog.breed = "Black lab";
```` -->


*Behind the scenes:  Array is an object with numberd keys!*

> **Quick Tip for Grandma from Colt:**
> LOL doesn't mean "Leg Of Lamb", but instead means "Laugh Out Loud"

