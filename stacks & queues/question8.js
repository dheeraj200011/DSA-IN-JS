const arr = [30, 40, 50, 60];

const nextWarmerDay = (arr) => {
  let stack = []; // Isme hum index store karenge, temperature nahi
  let ans = new Array(arr.length).fill(0);
  // 👉 Answer array banaya
  // 👉 Default value 0
  // 👉 Agar koi warmer day nahi mila → 0 hi rahega

  for (let i = arr.length - 1; i >= 0; i--) {
    let top = stack[stack.length - 1];
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }

    if (stack.length) {
      ans[i] = top - i; //next index - current index
    }
    stack.push(i);
  }

  return ans;
};

console.log(nextWarmerDay(arr));
