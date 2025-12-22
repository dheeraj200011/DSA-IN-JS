// Find the index of the first occurrence in a string via knuth morris (KMP)

const haystack = "onionionsky";
const needle = "onions"; // index where onions occur at 3

const firstOccourance = (haystack, needle) => {
  let lps = buildLps(needle);

  let i = 0;
  let j = 0;

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;

      // check match here
      if (j === needle.length) {
        return i - j;
      }
    } else {
      // JAB MATCH NHI HUA
      if (j !== 0) {
        // isme check hoga agar koi value match ho rhi hai to ek step back hoga
        j = lps[j - 1]; // 1 step back
      } else {
        i++;
      }
    }
  }

  return -1; // if no match
};

function buildLps(needle) {
  let lps = [];
  lps[0] = 0;

  let i = 1;
  let j = 0;

  while (i < needle.length) {
    if (needle[i] === needle[j]) {
      j++;
      lps[i] = j;
      i++;
    } else {
      // JAN=B MATCH NHI HUA
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}

console.log(firstOccourance(haystack, needle)); // 3
