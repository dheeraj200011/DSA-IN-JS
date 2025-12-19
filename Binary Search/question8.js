// find first ad last element in sorteed array

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
// output: [3,4] index of 8
// isme two binary search hoga

const searchRange = (nums, target) => {
  let first = findFirst(nums, target);
  let last = findLast(nums, target);
  return [first, last];
};

const findFirst = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  let ans = -1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      ans = m;
      r = m - 1; // ye isliye hai kyuki hume firstb point mil gya hai ab hum aage move karenbge
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return ans;
};

const findLast = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  let ans = -1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      ans = m;
      l = m + 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return ans;
};

console.log(searchRange(nums, target));
