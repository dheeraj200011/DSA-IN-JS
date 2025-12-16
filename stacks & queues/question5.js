// remove outer parentheses without stack

let input = "(()())(())";

const removeOuterParentheses = (input) => {
  let level = 0;
  let ans = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      // yha hum zero par hai
      if (level > 0) {
        // jab hum inner "(" par jayege to hi 1 hoga
        ans += input[i];
      }
      level++;
    } else {
      level--;
      if (level > 0) {
        ans += input[i];
      }
    }
  }

  return ans;
};

console.log(removeOuterParentheses(input));
