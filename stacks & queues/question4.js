// remove outer parentheses

let input = "(()())(())";

const removeOuterParentheses = (input) => {
  let stack = [];
  let ans = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      if (stack.length > 0) {
        ans += input[i]; // outer "(" skip
      }
      stack.push("(");
    } else {
      stack.pop();
      if (stack.length > 0) {
        ans += input[i]; // outer ")" skip
      }
    }
  }

  return ans;
};

console.log(removeOuterParentheses(input));
