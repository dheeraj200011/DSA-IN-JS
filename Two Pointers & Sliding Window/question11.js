let s1 = "abcdefghij";
let s2 = "gef";

const permutation = (s1, s2) => {
  if (s2.length > s1.length) return false;

  let map = {};
  let windowMap = {};
  let k = s2.length;

  // s2 ka frequency map
  for (let ch of s2) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (let i = 0; i < s1.length; i++) {
    // add current char to window
    windowMap[s1[i]] = (windowMap[s1[i]] || 0) + 1;

    // window size maintain // ye importandt logic hai
    if (i >= k) {
      windowMap[s1[i - k]]--; // s2 ki length se agge gya to left ke elem ko remove karjke aage window jayega
      if (windowMap[s1[i - k]] === 0) {
        delete windowMap[s1[i - k]];
      }
    }

    // compare maps
    if (compare(map, windowMap)) {
      return true;
    }
  }

  return false;
};

const compare = (m1, m2) => {
  for (let key in m1) {
    if (m1[key] !== m2[key]) return false;
  }
  return true;
};

console.log(permutation(s1, s2)); // true
