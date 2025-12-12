// implement stack using two queues

var Mystack = function () {
  this.q1 = [];
  this.q2 = [];
};

Mystack.prototype.push = function (value) {
  this.q1.push(value);
};

Mystack.prototype.pop = function () {
  let length = this.q1.length;
  for (let i = 0; i < length - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let ans = this.q1.shift();
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return ans;
};

Mystack.prototype.top = function () {
  let length = this.q1.length;
  for (let i = 0; i < length - 1; i++) {
    this.q2.push(this.q1.shift());
  }

  let ans = this.q1[0];
  this.q2.push(this.q1.shift()); // isko lagane se humare q1 ka last elemnet bhi q2 me aa jayega nhi to swp karte hi value complte swap hoga
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return ans;
};

Mystack.prototype.empty = function () {
  if (this.q1.length === 0) {
    return true;
  } else {
    return false;
  }
};
