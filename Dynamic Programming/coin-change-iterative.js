// Coin Change // very important// iterative approach
// ye tabulation formatb hai

const coinChange = (coins, amount) => {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1); // formula
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 3, 4], 6));
