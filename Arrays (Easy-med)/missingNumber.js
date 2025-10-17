const nums = [4, 0, 2, 1, 5];

const missingNumber = (nums) => {
  let sum1 = 0;
  let sum2 = 0;
  let missingNum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum1 += nums[i];
  }

  for (let i = 0; i <= nums.length; i++) {
    sum2 += i;
  }
  missingNum = sum2 - sum1;
  return missingNum;
};

console.log(missingNumber(nums));
