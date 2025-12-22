// two sum in sorted Array

let nums = [3, 2, 4, 5];
let target = 7;

const twoSum = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let sum = nums[l] + nums[r];

    if (sum === target) {
      return [l + 1, r + 1];
    }
    if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
  return -1;
};

console.log(twoSum(nums, target)); // return index +1
