// implement queue using stacks

var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

// push

MyQueue.prototype.push = function (value) {
  this.s1.push(value);
};

// shift

MyQueue.prototype.shift = function () {
  let length = this.s1.length;
  for (let i = 0; i < length; i++) {
    this.s2.push(this.s1.pop());
  }
  let ans = this.s2.pop();
  return ans;
};

// peek last element using [0]

MyQueue.prototype.top = function () {
  let length = this.s1.length;
  for (let i = 0; i < length; i++) {
    this.s2.push(this.s1.pop());
  }

  let ans = this.s2[this.s2.length - 1];

  return ans;
};

// empty

MyQueue.prototype.empty = function () {
  if (this.s1.length === 0) {
    return true;
  } else {
    return false;
  }
};
