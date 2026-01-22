// min cost climbing stairs

const minCostClimbingStairs = (cost) => {
  let n = cost.length;
  let dp = new Array(n + 1).fill(0);

  // ye base case hoga
  // kyuki isme 0 or 1 step  0 se start hoga
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]); // ye formula hai
  }

  return dp[n];
};

console.log(minCostClimbingStairs([10, 15, 20])); // 15
