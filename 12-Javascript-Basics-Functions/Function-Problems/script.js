function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
  // return num % 2 === 0;
}

function factorial(num) {
  var f = 1;
  for (var i = num; i > 1; i--) {
    f *= i;
  }
  return f;
}

function kebabToSnake(str) {
  return str.replace("-", "_");
}
