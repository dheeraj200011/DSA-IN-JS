// Decode ways

const s = "11106";

const numDecodings = (s) => {
  let dp = {};
  let fn = (remString) => {
    let n = remString.length;

    if (remString === "") return 1;
    if (remString[0] === "0") return 0;

    if (dp[remString]) return dp[remString];

    let ans = 0;

    let oneDigit = remString.substring(n - 1);
    let twoDigit = remString.substring(n - 2);

    if (Number(oneDigit) >= 1 && Number(oneDigit) <= 9) {
      ans += fn(remString.substring(0, n - 1));
    }

    if (Number(twoDigit) >= 10 && Number(twoDigit) <= 26) {
      ans += fn(remString.substring(0, n - 2));
    }

    dp[remString] = ans;
    return ans;
  };

  return fn(s);
};

console.log(numDecodings(s));
