// isme basicallly r or l agar combine hote hai to value increase hogi

const str = "LLLLRRRR";

const balanceCount = (str) => {
  let R = 0;
  let L = 0;
  let balanceCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "R") {
      R++;
    } else if (str[i] === "L") {
      L++;
    }
    if (R === L) {
      balanceCount++;
      R = 0;
      L = 0;
    }
  }

  return balanceCount;
};

console.log(balanceCount(str));
