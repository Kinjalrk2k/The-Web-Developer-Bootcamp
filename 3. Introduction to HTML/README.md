## History of HTML
- Hyper Text Mark-up Language
- Created in 1989/1990
- Allowed publishing and exchanging of scientific documents
- Allowed electronic linking of documents sing hyperlinks

## The General Rule
````html
<tagname> Some Content </tagname>
````

[example](example)

## HTML Boilerplate
>In computer programming, boilerplate code or just boilerplate are sections of code that have to be included in many places with little or no alteration. When using languages that are considered verbose, the programmer must write a lot of code to accomplish only minor functionality. Such code is called boilerplate.

````html
<!DOCTYPE html>
<html>
    <head>
        <!-- Our metadata goes here -->
        <title></title>
    </head>

    <body>
        <!-- Our content goes here -->
    </body>
</html>
````

## Comments
````html
<!-- This is a comment. It doesn't do anything -->
````

## Common Tags
````html
<h1>I'm a header</h1>
<h2>I'm a slightly smaller header</h2>
<h6>I'm the smallest header</h6>

<p>I'm a paragraph</p>

<button>I'm a button</button>

<ul>
    <li>List item 1</li>
    <li>List item 2</li>
</ul>

<ol>
    <li>List item 1</li>
    <li>List item 2</li>
</ol>
````

[firstPage.html](firstpage.html)

[quiz1.html](quiz1.html)

## Generic Containers
Groups elements together; can be used for styling blocks easily
- div
    - block level element
- span
    - inline element

## Attributes
````html
<tag name="value"></tag>
````
- Image tag
    ````html
    <img src="link">
    ````
- Anchor tag
    ````html
    <a href="url">Link Text</a>
    ````
    - Inline element

[assignment](assignment.html)

#### Quick notes
> - Headings, Paragraphs are block level elements. Each heading within a particular tag gets it's own line
> - Bold, Italics, Underline are inline elements
> - ````bold```` to ````strong````; ````italics```` to ````em```` : Semantic mark-up
> - ````img```` has no closing tag

#### MDN Direct references
- [MDN Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
    - [````<!DOCTYPE html>````](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Introduction_to_HTML5)
    - [````<html>````](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
    - [````<head>````](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
    - [````<body>````](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
    - [````<h1>````](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
    - [````<p>````](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
    - [````<div>````](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
    - [````<span>````](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
- [MDN Attribute Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

#### VSCode Tips
- Use ````F2```` on a opening tag to rename both the opening and closing tag to an another tag
- Emmet tricks:
    - Use ````Ctrl + Shift + P```` to bring the Command Palette and use ````Emmet: Wrap with Abbreviation```` to wrap text with HTML tags
    - Use ````!```` to get the HTML Boilerplate
    - Use ````li*3```` to create 3 ````<li>```` tags easily
