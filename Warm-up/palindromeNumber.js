const num = 1221221; // 1221221

const palindromeNumber = (num) => {
  if (num < 0) return;
  let reverse = 0;
  num = Math.abs(num);

  while (num > 0) {
    let lastDigit = num % 10; // get the last digit
    reverse = reverse * 10 + lastDigit; // 0 * 10 + (lastdigit)
    num = Math.floor(num / 10); // remove last digit
  }
  return reverse;
};

console.log(palindromeNumber(num));
