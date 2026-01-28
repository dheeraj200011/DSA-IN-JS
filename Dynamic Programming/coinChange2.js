// coin-change-2
// isme tak-coin or skip coin use higa
// formula : ways(i, amount) =
// ways(i, amount - coin[i]) + // take
//   ways(i + 1, amount); // skip

let amount = 5;
let coins = [1, 2, 5];

const change = (amount, coins) => {
  let n = coins.length;
  let dp = Array.from({ length: amount + 1 }, () => Array(n).fill(-1));

  const fn = (start, remAmount) => {
    if (remAmount === 0) return 1;
    if (remAmount < 0 || start === coins.length) return 0;

    if (dp[remAmount][start] != -1) return dp[remAmount][start];

    let combination = 0;

    for (let i = start; i < coins.length; i++) {
      combination = combination + fn(i, remAmount - coins[i]);
    }
    return (dp[remAmount][start] = combination);
  };

  return fn(0, amount);
};

console.log(change(amount, coins)); // 👉 4
