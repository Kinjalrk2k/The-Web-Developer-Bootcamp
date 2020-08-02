function sing() {
  console.log("Twinkle twinkle...!");
  console.log("How I wonder...!");
}

setInterval(sing, 1000);

// clearInterval(num)
// setInterval() returns a number
// We can use that number in clearInterval() to stop the setInterval()'s execution

// Anonymous function
setInterval(function () {
  console.log("I am an anonymous function!");
  console.log("THIS IS AWESOME!");
}, 2000);
