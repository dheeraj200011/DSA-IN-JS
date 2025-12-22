// Find the index of the first occourance in a string

const haystack = "onionionsky";
const needle = "onions"; // index whre sad occour at 3

const wordOccour = (haystack, needle) => {
  let window = needle.length;

  for (let i = 0; i <= haystack.length - window; i++) {
    // ye outer loop window 6 letters tak run hoga jo ki needle ka size hai
    let j = 0;

    while (haystack[i + j] === needle[j]) {
      // yha needle ke letter or hat=ystack ke letter ka comapare ho rha hai
      j++;
    }
    if (j === needle.length) return i; // or jaise hi j ka size needle ke equal ho hoga hum i ko return kar denge
  }
  return -1;
};

console.log(wordOccour(haystack, needle));
