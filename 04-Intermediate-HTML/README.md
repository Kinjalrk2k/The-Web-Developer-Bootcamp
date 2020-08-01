[example](example.html)
[Pokémon-Chart](Pokemon-Chart.html)

## Form tag
````html
<form action="/my-form-submitting-page" method="post">
<!-- All our inputs go here -->
</form>
````

## Input tag
````html
<input type="text">
<input type="date">
<input type="color">
<input type="file">
<input type="checkbox">
````

## Labels
````html
<form action="/sign-in-url" method="post">
    <label>Username: <input type="text"></label>
    <label>Password: <input type="password"></label>
    <button>Login</button>
</form>
````

````html
<form action="/sign-in-url" method="post">
    <label for="username">Username: </label>
    <input id="username" type="text">
    <label for="password">Password: </label>
    <input id="password" type="password">
    <button>Login</button>
</form>
````

## Simple Validations
````html
<form action="/sign-in-url" method="post">
    <label for="email">Email: </label>
    <input id="email" type="email" required>
    <label for="password">Password: </label>
    <input id="password" type="password" required>
    <button>Login</button>
</form>
````

[forms](forms.html)


## Radio Button
````html
<input name="choice-name" id="id1" type="radio" value="v1">
<input name="choice-name" id="id2" type="radio" value="v2">
````
The ````name=" "```` attribute groups the radio buttons. It is stored and sent in a http request in the same way.
The ````value=" "```` attribute sends the corresponding value when the form is submitted.

## Textarea
````html
<textarea name="para" cols="30" rows="10"></textarea>
````
rows and columns justifies the size

[inputs](inputs.html)


#### MDN Direct references
[````<table>````](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
[````<input>````](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
[````<textarea>````](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)