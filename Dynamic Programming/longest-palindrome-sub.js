// longest palindromic substring
// ye same hoga palindromic substring

const s = "babad";

const longestPalindrome = (s) => {
  let n = s.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(null));
  let ans = [0, 0];

  // 1 st letter
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    // 2nd letter
    if (i < n - 1 && s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      ans = [i, i + 1];
    }
  }

  // len 3 to n
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;
      if (s[i] === s[j] && dp[i + 1] === dp[j - 1]) {
        dp[i][j] = true;
        ans = [i, j];
      }
    }
  }
  return s.substring(ans[0], ans[1] + 1);
};

console.log(longestPalindrome(s));
