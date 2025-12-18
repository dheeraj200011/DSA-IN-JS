//

const nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;

const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (nums[m] === target) return m;

    // check left sorted
    if (nums[l] <= nums[m]) {
      if (nums[l] <= target && target < nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }

    // check right sorted
    else {
      if (nums[m] < target && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }

  return -1;
};

console.log(search(nums, target)); // 4
