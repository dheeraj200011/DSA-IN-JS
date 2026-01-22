// Climbing Stairs
// ye question fibonacci sse milta hai

let store = {};
const climbStairs = (n) => {
  if (n === 0 || n === 1) return 1; // jab stair par hum 0 se 1 move karenge to 1 step ho jayega

  if (!store[n]) {
    store[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  return store[n];
};

console.log(climbStairs(2));
