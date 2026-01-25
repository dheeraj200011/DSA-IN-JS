// Palindromic Substrings

const s = "racecar";

const countSubStrings = (s) => {
  let n = s.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(false));
  let count = 0;

  // length = 1 // ye single letter ke liye hai
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    count++;
  }

  // length = 2 // ye doble letter ke liye hai
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      count++;
    }
  }

  // length = 3 to n
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;
      // ye fotmula line hai
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        count++;
      }
    }
  }

  return count;
};

console.log(countSubStrings(s)); // ✅ 10
