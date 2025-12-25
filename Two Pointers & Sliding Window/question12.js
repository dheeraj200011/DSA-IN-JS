// sliding window maximum

const arr = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

const maxSlidingWindow = (arr, k) => {
  let result = [];

  for (let i = 0; i <= arr.length - k; i++) {
    let window = arr.slice(i, i + k);
    let maxValue = Math.max(...window);
    result.push(maxValue);
  }

  return result;
};

console.log(maxSlidingWindow(arr, k));
