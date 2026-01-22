// fibonacci using DP
// dp concept isme hum recursion ke value ko store karte hai
// jisse solution kaffi efficient hota
// basically hum recuesion karne hai to 2 ki pow n times hota hai
// dp ki help se wo O(n) ho jate hai

// ye top down approach hai
// isme hum memoization ka use karte hai

// let store = {};
// const fibonacci = (n) => {
//   if (n <= 1) {
//     return n;
//   }
//   if (!store[n]) {
//     store[n] = fibonacci(n - 1) + fibonacci(n - 2);
//   }

//   return store[n];
// };

// console.log(fibonacci(4));

// ab bottom up approach ka use hoga
// isse hum tabulation bhi kahte hai

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  let dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(fibonacci(4));
