// partition-equal-subset-sum

const nums = [1, 5, 11, 5];

const canPartitions = (nums) => {
  // isme two subsets hai to sinle array ka sum total array sum ka half hoga
  let totalSum = nums.reduce((acc, curr) => acc + curr, 0);
  let target = totalSum / 2;



};

console.log(canPartitions(nums));
