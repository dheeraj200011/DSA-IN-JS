// longest repeating character
// substring me hamesha sliding window or map use hoga

const s = "AABEAFAABEAFA"; // output: 5 change BAND E INTO A

const repeatCharacter = (s) => {
  let map = {};
  let i = 0;
  let maxFreq = 0;
  let maxLen = 0;
  let k = 2;
  let currW = j - i + 1;

  for (let j = 0; j < s.length; j++) {
    map[s[j]] = (map[s[j]] || 0) + 1; // add all letter in map
    maxFreq = Math.max(maxFreq, map[s[j]]); // get the total max value of A

    while (currW - maxFreq > k) {
      // if letter chnage shrink i
      map[s[i]]--;
      i++;
    }

    maxLen = Math.max(maxLen, currW); // return th max length
  }

  return maxLen;
};

console.log(repeatCharacter("AABEAFAABEAFA"));
