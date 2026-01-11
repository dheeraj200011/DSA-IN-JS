// best time to buy sell
// iske liye hume ek graph bnanan hoga
// hum un do  points ko lenge jo neeche se upar ja rhe ho

let prices = [7, 1, 5, 3, 6, 4];
// yha 1 se 5 or 3 se 6 me profit ho tha hai : 1 -5 + 3 -6 = 4 + 3 = 7 is ans

const maxProfit = (prices) => {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
};

console.log(maxProfit(prices));
