// REVERSE A STRING IN AN ARRAY

const s = ["h", "e", "l", "l", "o"];
// output : [ 'o', 'l', 'l', 'e', 'h' ]

const reverseString = (s) => {
  let newArray = [];
  for (i = s.length - 1; i >= 0; i--) {
    newArray.push(s[i]);
  }
  return newArray;
};

console.log(reverseString(s));
