// maximum product subarray

let nums = [2, 3, -2, 4];

const maxProduct = (nums) => {
  let maxProd = nums[0];
  let minProd = nums[0];
  let totalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // store old max because min calculation needs it
    let prevMax = maxProd;

    let curr = nums[i];
    maxProd = Math.max(curr, curr * maxProd, curr * minProd);
    minProd = Math.max(curr, curr * prevMax, curr * minProd);

    totalMax = Math.max(totalMax, maxProd);
  }

  return totalMax;
};

console.log(maxProduct(nums));
