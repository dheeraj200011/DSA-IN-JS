// string ke start values jo k me defined hai sirf usee hi reverse karna hai baaki same hi rhega.

const reverseStr = (str, k) => {
  let reverse = [];
  str = str.split("");
  for (let i = str.length - 1; i >= 0; i--) {
    reverse.push(str[i]);
  }
  return reverse
};

console.log(reverseStr("abcdefg", 2)); // "gfedcba"
