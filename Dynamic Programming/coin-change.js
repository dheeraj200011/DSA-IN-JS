// Coin Change // very important// recursive approach

const coinChange = (coins, amount) => {
  let n = coins.length;
  let dp = {}; // ye memoization ke liye use kiya

  let fn = (remAmount) => {
    let minCoins = Infinity; // ye line question me di hui hai

    for (let i = 0; i < n; i++) {
      if (remAmount === 0) return 0;
      if (remAmount < 0) return -1;
      if (remAmount in dp) {
        return dp[remAmount];
      }

      let res = fn(remAmount - coins[i]); // ye formula ka part hai
      if (res != -1) {
        minCoins = Math.min(minCoins, 1 + res); // ye bhi formula hai
      }
    }

    dp[remAmount] = minCoins === Infinity ? -1 : minCoins; // agar number infinity hua to -1 nhi to mi coins
    return dp[remAmount];
  };
  return fn(amount);
};

console.log(coinChange([1, 3, 4], 6));
