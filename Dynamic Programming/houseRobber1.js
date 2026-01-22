// House Robber 1

const house = [1, 2, 3, 1]; // output : 4

const rob = (house) => {
  let prev2 = 0;
  let prev1 = 0;

  for (let money of house) {
    let curr = Math.max(prev2 + money, prev1);
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
};

console.log(rob(house));
