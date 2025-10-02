const str = "Hello World";

const reverseLetters = (str) => {
  let reverse = str
    .split()
    .map((element) => element.split("").reverse())
    .join("");
  console.log(reverse);
};

console.log(reverseLetters(str));
