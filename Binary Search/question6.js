// Find peak element

const nums = [1, 2, 1, 3, 5, 6, 4]; // output: 5

const findPeak = (nums) => {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let m = Math.floor((l + r) / 2);

    if (nums[m] < nums[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return nums[r]; // yha l or r dono equal honge
};

console.log(findPeak(nums)); // 5 or 6 (any valid peak)
