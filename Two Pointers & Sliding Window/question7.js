// Three Sum
// steps
// first we sort the array
// then we create a loop and add two sum and add

const arr = [-1, 0, 1, 2, -1, -4];

const threeSum = (arr) => {
  arr.sort((a, b) => a - b);
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      twoSum(arr, i, ans);
    }
  }
  return ans;
};

const twoSum = (arr, x, ans) => {
  let i = x + 1;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[x] + arr[i] + arr[j];

    if (sum > 0) {
      j--;
    } else if (sum < 0) {
      i++;
    } else {
      ans.push([arr[x], arr[i], arr[j]]);
      i++;
      j--;

      // skip duplicates
      while (i < j && arr[i] === arr[i - 1]) i++;
      while (i < j && arr[j] === arr[j + 1]) j--;
    }
  }
};

console.log(threeSum(arr));
