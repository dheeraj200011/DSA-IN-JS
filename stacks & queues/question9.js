// next greater element 2

const arr = [1, 5, 0, 3, 4, 9, 2, 6, 8];

const nextGreaterCircular = (arr) => {
  let stack = [];
  let doubleArray = [...arr, ...arr];
  let ans = new Array(arr.length).fill(-1);

  for (let i = doubleArray.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= doubleArray[i]) {
      stack.pop();
    }
    ans[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(doubleArray[i]);
  }
  return ans.slice(0, arr.length);
};

console.log(nextGreaterCircular(arr));
