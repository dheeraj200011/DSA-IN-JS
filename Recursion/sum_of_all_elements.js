const nums = [1, 2, 3, 4, 5]; // output: 15

const totalSum = (index) => {
  if (index < 0) {
    return 0;
  } else {
    return nums[index] + totalSum(index - 1);
  }
};

console.log(totalSum(nums.length - 1)); // Output: 15
