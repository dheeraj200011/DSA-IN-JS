// longest-increasing-subsequence // very important

const nums = [10, 9, 2, 5, 3, 7, 101, 18];

const lengthOfLts = (nums) => {
  let n = nums.length;
  let dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        // yha +1 isliye hai kyuki sinle start elem bhi ek sunsequnce hota hai
        dp[i] = Math.max(dp[i], dp[j] + 1);
        // to jaise hi koi elem j se bda hoga to  +1 hoga or to max output hoga wo ans hai
      }
    }
  }
  return Math.max(...dp);
};

console.log(lengthOfLts(nums));
