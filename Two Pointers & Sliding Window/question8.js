// Trappig rain water

// constraints
// phle hum left se max value jo nikalenge
// uske baad same chiz right size me hogi
// phir inn done me se jo min hoga
// uske hum graph ki height se minus karenge
// or value aayegi usko add kate jayenge

const height = [4, 2, 0, 3, 2, 5];

const trap = (height) => {
  // phle hum left se max value jo nikalenge
  let sum = 0;
  let maxl = [];
  maxl[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    maxl[i] = Math.max(maxl[i - 1], height[i]);
  }

  let maxr = [];
  maxr[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    maxr[i] = Math.max(height[i], maxr[i + 1]);
  }

  for (let i = 0; i < height.length; i++) {
    let waterTrapped = Math.min(maxl[i], maxr[i]) - height[i];
    if (waterTrapped < 0) {
      waterTrapped = 0;
    } else {
      sum = sum + waterTrapped;
    }
  }
  return sum;
};

console.log(trap(height));
