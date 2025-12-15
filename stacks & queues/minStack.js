// Min stack

var Stack = function () {
  this.s = [];
};

// push

Stack.prototype.push = function (value) {
  if (!this.s.length) {
    this.s.push([value, value]); // first in current val, sec is min val
  } else {
    let minValue = Math.min(value, this.s[this.s.length - 1][1]);
    this.s.push([value, minValue]);
  }
};

Stack.prototype.pop = function () {
  this.s.pop();
};

// top

Stack.prototype.top = function () {
  return this.s[this.s.length - 1][0];
};

// get Min

Stack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1];
};
