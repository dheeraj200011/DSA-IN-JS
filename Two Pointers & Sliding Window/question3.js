// is sequence

let s = "axc";
let t = "ahbgdc"; // agar s ka letter t me hoga to trur hoga

const isSequence = (s, t) => {
  let i = 0;
  let j = 0;

  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
    } else {
      j++;
    }
  }
  if (i === s.length) {
    return true;
  } else {
    return false;
  }
};

console.log(isSequence(s, t));
