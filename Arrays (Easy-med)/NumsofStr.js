const str = "hello";

const countStr = (str) => {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      hash[str[i]] += 1;
    } else {
      hash[str[i]] = 1;
    }
  }
  return hash;
};
console.log(countStr(str));
