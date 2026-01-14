// candy- two pass
// isme left se right compare karenge agar left wala child se kam hai lo left + 1
// agar right child se kam hai to right + 1 hoga

const ratings = [1, 0, 2]; // [2, 1, 2]
// asc: [1, 2,3] : [1,2,3]
// des : [100. 70, 50] : [3, 2,1]

// [1, 2, 2] : [1, 2, 1] : jab equal hoga to 1 hoga

const candy = (ratings) => {
  let n = ratings.length;
  let candies = Array(n).fill(1);

  // left to right
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  } // ratings = [1, 1, 2]

  // ab same ratings = [1, 0, 2] ko reverse me run karega

  // right to left
  // n -2: 3 - 2 : 1 to loop run hoga 1 or 0 par
  // ab jab ye zero index par aa jyega to candies[0] par max(1, 1+1)=2
  // candies[0] = 2 : final : [2,1,2]
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1); //
    }
  }
  // total sum of [2,1,2]
  return candies.reduce((a, b) => a + b, 0);
};

console.log(candy(ratings));
