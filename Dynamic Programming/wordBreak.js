// Word break

const s = "catsandog";
const wordict = ["cats", "sand", "and", "dog", "cat"];

const wordBreak = (s, wordict) => {
  let dp = {};

  let fn = (remStr) => {
    if (remStr === "") return true;
    if (remStr in dp) return dp[remStr];
    let res = false;

    for (let i = 0; i < remStr.length; i++) {
      // yha letter ko word me toda ja trha
      let word = remStr.slice(0, i + 1);
      // phir check ho rh ki dictme word to toda wo hai ya nhi
      if (wordict.includes(word) && fn(remStr.substring(i + 1))) {
        return (res = true);
      }
    }
    return (dp[remStr] = res);
  };

  return fn(s);
};

console.log(wordBreak(s, wordict));
