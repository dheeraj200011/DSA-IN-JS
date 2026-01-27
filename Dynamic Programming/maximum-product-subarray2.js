// maximum product subarray 2nd Approach
// pints
// isme agar -ve even number hai to +ve output hoga
// isme gar -ve odd number hai to -ve output hoga

// -ve odd ke liye right to left karna hoga
// -ve even ke liye left to right hoga

const nums = [2, 3, -2, 4];

const maxProduct = (nums) => {
  let n = nums.length;
  let ltrProd = (rtlProd = 1);
  let finalMax = -Infinity;

  for (let i = 0; i < n; i++) {
    ltrProd = ltrProd * nums[i];
    finalMax = Math.max(ltrProd, finalMax);
    if (ltrProd === 0) ltrProd = 1;
  }

  for (let i = n - 1; i >= 0; i--) {
    rtlProd = rtlProd * nums[i];
    finalMax = Math.max(rtlProd, finalMax);
    if (rtlProd === 0) rtlProd = 1;
  }

  return finalMax;
};

console.log(maxProduct(nums));
