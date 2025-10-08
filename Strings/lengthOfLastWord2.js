const s = "fly me to the moon   ";

function strLastlength(s) {
  let n = s.length - 1;
  let count = 0;

  while (n >= 0) {
    if (s[n] === " " && count === 0) {
      // issse spaces ko hum sirf last word milne tak hi skip karenge
      n--;
    } else if (s[n] !== " ") {
      count++;
      n--;
    } else {
      break;
    }
  }

  return count;
}

console.log(strLastlength(s)); // Output: 4
