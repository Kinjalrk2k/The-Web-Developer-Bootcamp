$("button").on("click", function () {
  $("div").fadeOut(1000); // JS doesn't wait for 1000ms here
  console.log("Fade out Complete");

  $("div").fadeIn(1000, function () {
    //  when used as a callback function, it executes after the fadeIn is done
    console.log("Fade in Complete");
  });
});

$("button").on("click", function () {
  $("div").slideToggle(); // JS doesn't wait for 1000ms here
  console.log("Slide down Complete");
});
