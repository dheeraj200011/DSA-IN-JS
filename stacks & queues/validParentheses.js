// valid parentheses

// sloce points: string ke values agar stack ke elem se match hue to usse remove karenge nhi to stack me add hoga
// last me stack agar o hua to true hoga nhi to false

// solution

let str = "[{}()({}){([])}]"; // true

const validParantheses = (str) => {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      // ye opening hai only
      stack.push(str[i]);
    } else {
      let top = stack.pop();
      if (!top || top != map[str[i]]) {
        // yha map[str[i]] ye closing bracket ka hai ye match nhi hua to false hoga
        return false;
      }
    }
  }
  return stack.length === 0;
};

validParantheses(str);
