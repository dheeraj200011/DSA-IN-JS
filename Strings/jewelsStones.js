let jewels = "aA";
let stones = "aAAbbbb";
// output: 3

const numJewels = (jewels, stones) => {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        count++;
      }
    }
  }
  return count;
};

console.log(numJewels(jewels, stones));
