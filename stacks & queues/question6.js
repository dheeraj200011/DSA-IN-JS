// reverse polish notation

let input = ["2", "1", "+", "3", "*"]; // outpur: (2+1) * 3 = 9

const evalRPN = (input) => {
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    if (
      input[i] !== "+" &&
      input[i] !== "-" &&
      input[i] !== "/" &&
      input[i] !== "*"
    ) {
      stack.push(Number(input[i]));
    } else {
      if (stack.length < 2) return;
      let a = stack.pop();
      let b = stack.pop();
      let result;
      let operands = input[i];

      result = eval(b + operands + a);
      stack.push(result);
    }
  }

  return stack.pop();
};

console.log(evalRPN(input));

// another way

// if (stack.length < 2) return;
//       let a = stack.pop();
//       let b = stack.pop();
//       let result;

//       if (input[i] === "+") result = a + b;
//       if (input[i] === "-") result = a - b;
//       if (input[i] === "/") result = Math.trunc(a / b);
//       if (input[i] === "*") result = a * b;
//       stack.push(result);
