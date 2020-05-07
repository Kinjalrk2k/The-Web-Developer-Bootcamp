## CSS
- Cascading Style Sheets
- ````CSS:adjective :: HTML:Noun````

## The General Rule
````css
selector {
    property: value;
    anotherProperty: value;
}
````

## Writing styles
- Inline: Write styles on every element
    - ````html
        <h3 style="color: pink;">blah blah blah</h3>
        <h3 style="color: pink;">knock knock</h3>
        ````
    - Need to specify for each element
    - HTML and CSS are all together :(
        - CSS should have a separate file

- ````Style```` Tag: On the head
    - ````html
        <head>
            <title>About me</title>
            <style type="text/css">
                h1 {
                    color: purple;
                }
            </style>
        </head>
        ````
    - Not in the body, but still in our HTML
    - This is used for quick demonstrations

- ````Link```` tag
    - Write CSS in a different file and then connect the same with the HTML file (in the head)
    - ````html
        <link rel="stylesheet" type="text/css" href="app.css">
        ````
    - This is the best idea :) 

## CSS Colors
[CSS colour names](https://colours.neilorangepeel.com/)
**Color systems in CSS**
- Hexadecimal
    - ````# + 6 hexadecimal numbers (from 0-F)````
    - ````#```` is technically known as: octothorpe
    - Limits
        - Black: ````#000000````
        - White: ````#FFFFFF````
    - Color formation: Hexadecimal color code is 6digit, so:
        - First 2 Digits: Amount of RED (Full Red: ````#FF0000````)
        - Next 2 Digits: Amount of GREEN (Full Green: ````#00FF00````)
        - Last 2 Digits: Amount of BLUE (Full Blue: ````#0000FF````)
- RGB
    - ````rgb(r, g, b)````
    - 3 channels: Red, Green, Blue. Each ranges from 0-255
- RGBA
    - ````rgb(r, g, b, a)````
    - The 4th channel alpha: for transparency
    - Range = 0 to 1

## CSS Borders
**It is necessary to provide values for all the below 3 attributes for borders to appear**
- width
- color
- style
> Use shorthand: ````border: <width> <color> <style>````

[aboutMe.html](aboutMe/aboutMe.html)
[app.css](aboutMe/app.css)

## CSS Selectors
**3 Selectors:**
- Element
    - Selects all Instances of a particular element
    
- ID
    - Add a hook ````id=""```` in HTML
    - Refer the id with ````#```` in CSS to style it particularly
    - > ID's can purely be used single time. Specifying two elements with same id is invalid HTML

- Class
    - Almost like an id, but we can use the same class name to any number of elements on a page
    - Add a hook ````class=""```` in HTML
    - Refer the id with ````.```` in CSS to style it particularly

[todoList.html](todos/todoList.html)
[todos.css](todos/todos.css)

## More CSS Selectors
- Star Selector
    - ````*````
    - Selects every element in the page
    - Every element is selected and the styles are added to each one
- Descendant Selector
    - Select elements inside another element
    - ````<parent tag> <child/selected tag>````
    - Example to select all the ````<a>```` tags inside the ````<li>```` tags
        ````css
        li a{

        }
        ````
- Adjacent Selector
    - Select elements adjacent to another element
    - ````<parent tag> + <child/selected tag>````
    - Example to select all the ````<ul>```` tags adjacnet the ````<h4>```` tags
        ````css
        h4 + ul{

        }
        ````
    - Being adjacent means: being at the same level

- Attribute Selector
    - Select element based on any attribute
    - ````<parent tag>[<attribute select>]````
    - Example to select all the ````<a>```` tags with links to ````http://www.google.co.in````
        ````css
        a[href="http://www.google.co.in"] {
    
        }
        ````

- nth of type
    - Select the nth element of the passed type
    - ````<tag>:nth-of-type(n)````
    - Example to select the 3rd ````ul```` tag
        ````css
        ul:nth-of-type(3) {
        
        }
        ````

[selectorDemo.html](selectorDemo/seclectorDemo.html)
[selectors.css](selectorDemo/selectors.css)

## Inheritance
- If we set a style on a parent, then the children are also affected

## Specificity
- However if an element is styled specifically, it will pick up the same(regardless of it's parent)
- We can have multiple styles targeting a single element, the style more specific(close to the element) is picked
- More tags = More specificity

**Order**
- Type Selectors ````(×1)````
    - Element Selector
    - Descendant selector | Adjacent selector (because they have more than one tags)
- Class, Attribute, Pseudo-Class Selectors ````(×10)````
- ID Selector ````(×100)````

[specificity.html](specificity/specificity.html)
[styles.css](specificity/styles.css)

#### Selector Exercise
[selectorsExercise.html](exercise/solution/selectorsExercise.html)
[selectors.css](exercise/solution/selectors.css)

#### References
[The 30 CSS Selectors You Must Memorize](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
[MDN - Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
[Specificity Calculator](https://specificity.keegan.st/)
