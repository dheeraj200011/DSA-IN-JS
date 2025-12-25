// Longest Substring without repeating characters

// constraints

// hum i or j ko 0 index par rakhenge
// ek map create karegbe

const str = "abcabcbb";

const lengthoflongestsubstring = (str) => {
  let i = 0; // ye lft pointer hai
  let map = {}; // j ko store karne ke liye
  let maxWs = 0; // max window ke liye

  for (let j = 0; j < str.length; j++) {
    if (map[str[j]] >= i) {
      // agar letter window me hai
      i = map[str[j]] + 1; // i ko j + 1 kar denge
    }

    map[str[j]] = j; // agar nhi hai to j ko upadte karenge
    let currWs = j - i + 1; // ye formula hai curr window nikalane ka
    maxWs = Math.max(maxWs, currWs); // get the max
  }

  return maxWs; // return max
};

console.log(lengthoflongestsubstring(str)); // ✅ 3
