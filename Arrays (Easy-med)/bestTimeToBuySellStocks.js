// BEST TIME TO BUY SELL STOCKS

const price = [7, 1, 5, 3, 6, 4];

const maxProfit = (price) => {
  let minPrice = Infinity;
  let maxProfit = 0;
  let buy = 0;
  let sell = 0;

  for (let i = 0; i < price.length; i++) {
    if (price[i] < minPrice) {
      minPrice = price[i];
    }

    if (price[i] - minPrice > maxProfit) {
      maxProfit = price[i] - minPrice;
      buy = minPrice;
      sell = price[i];
    }
  }
  return { buy, sell, maxProfit };
};

console.log(maxProfit(price));
