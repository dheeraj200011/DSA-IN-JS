// find most frequent vowel and consonent

const str = "successesee";
// consonent : s = 4, c = 2 : 4
// vowel : u=1, e=2: 2
// output = 4 +2 = 6

const maxFewqSum = (str) => {
  // use hasmap to get the count
  let count = {};
  let vowelCount = 0;
  let consonentCount = 0;
  let vowels = "aeiou";
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    count[str[i]] = (count[str[i]] || 0) + 1;
  }

  for (key in count) {
    if (vowels.includes(key)) {
      vowelCount = Math.max(vowelCount, count[key]); // math.max (me first value eo hai jiseme se max hoga or second collection data hai jisme se max value niklegi)
    }
    consonentCount = Math.max(consonentCount, count[key]);
  }
  sum = vowelCount + consonentCount;
  return sum;
};
console.log(maxFewqSum(str));
