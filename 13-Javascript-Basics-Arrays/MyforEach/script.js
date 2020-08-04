function myforEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

Array.prototype.myforEach = function (func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
};
