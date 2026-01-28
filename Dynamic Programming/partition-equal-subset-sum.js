// partition-equal-subset-sum

const nums = [1, 5, 11, 5];

const canPartitions = (nums) => {
  let dp = {};
  // isme two subsets hai to sinle array ka sum total array sum ka half hoga
  let totalSum = nums.reduce((acc, curr) => acc + curr, 0);
  let target = totalSum / 2;

  let fn = (remNums, start) => {
    
    if (remNums === 0) return true;
    if (remNums < 0) return false;
    for (let i = start; i < nums.length; i++) {
      if (fn(remNums - nums[i], i + 1)) {
        return true;
      }
    }

    return false;
  };

  return fn(target, 0);
};

console.log(canPartitions(nums));
