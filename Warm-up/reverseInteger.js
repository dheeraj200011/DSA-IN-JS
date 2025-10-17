const num = -120;
// i will go to the 32 bit

const reverseNumber = (num) => {
  if (num === 0) return;
  let reverse = 0;
  const isNegative = num < 0;
  num = Math.abs(num);

  while (num > 0) {
    let lastDigit = num % 10;
    reverse = 10 * reverse + lastDigit;
    num = Math.floor(num / 10);
  }
  const limit = 2 ** 31;
  if (reverse > limit || reverse < -limit) return 0;
  return isNegative ? -reverse : reverse;
};

console.log(reverseNumber(num));
