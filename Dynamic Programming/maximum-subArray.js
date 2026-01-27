// Maximum Subarray // very Imp
// kadane algo ka use hoga yha par
// formula
// S(i) = max(A[i], S(i-1) + A[i])
// Ans  = max over all S(i)

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubarray = (nums) => {
  let currSum = nums[0];
  let maxsum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]); // ye main logic hai
    maxsum = Math.max(maxsum, currSum);
  }

  return maxsum;
};

console.log(maxSubarray(nums));
