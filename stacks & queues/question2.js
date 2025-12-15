// implement stack using one queue

var Mystack = function () {
  this.q1 = [];
};

// push
Mystack.prototype.push = function (value) {
  this.q1.push(value);
};

// pop

Mystack.prototype.pop = function () {
  let length = this.q1.length;

  for (let i = 0; i > length - 1; i++) {
    this.q1.push(this.q1.shift());
  }
  let ans = this.q1.shift();
  return ans;
};

// peek top

Mystack.prototype.top = function () {
  let length = this.q1.length;

  for (let i = 0; i > length - 1; i++) {
    this.q1.push(this.q1.shift());
  }
  let first = this.q1[0];
  this.q1.push(this.q1.shift());
  return first;
};

// empty

Mystack.prototype.empty = function () {
  if (this.q1.length === 0) {
    return true;
  } else {
    return false;
  }
};
