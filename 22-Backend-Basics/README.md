## Basics of the Internet
When we go to an URL
- Finding the right IP address
    - Our query is submitted to ISP
    - Within the ISP, DNS takes the domain name and turns it into IP
- Going to the address
    - Request sent to the IP Address via HTTP
    - Finds the fastest possible path
    - Hops from server to server, not a direct path
- Server Responds
    - Figures out the requested page
    - Build the right content, pulls from a database
    - Server responds with combination of HTML, CSS, JS
- At our computer
    - Receives the HTML as content
    - Renders the page in the browser

## Static vs Dynamic
- Dynamic pages are compiled on the server side (constructs a webpage and then send back as response)
- Static sites are same contents all the time (Same HTML, CSS, JS)

## Stack
Refers to all the technologies that a web application uses
- HTML, CSS, JS are almost part of the stack
- Backend Language
- Sever
- Database

[Stackshare.io](https://stackshare.io/)

## Our stack
- Frontend
    - HTML
    - CSS
    - Javascript
- Backend
    - NodeJS
    - Express (Framework)
    - MongoDB (Database)

## HTTP
- Request Response cycle
- HTTP request can be made through anywhere
- HTTP verbs (GET, POST, DELETE, etc): tells the browser the kind of request we're making - these are protocols

### Things we find in a request's response
- Body: The HTML, CSS, JS of the site (page source)
- Headers: Metedata about the response
- Status Code

### Payload
- We can add payload to our GET request (like a search term) - Query String
- These payloads starts after ```?``` in a key value pair form
    - Example: ```www.reddit.com/search?q=term```
- More key value pairs can be added by joining with ```&```

