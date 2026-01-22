// house Robber 2
// isme 2 function honge
//

const nums = [2, 3, 2]; // output 3

const rob = (nums) => {
  let n = nums.length;
  if (n === 1) return nums[0];

  // case 1 not inclue last house

  let case1 = roblinear(nums, 0, n - 2);

  // case 2 exclue first house

  let case2 = roblinear(nums, 1, n - 1);

  return Math.max(case1, case2);
};

function roblinear(nums, start, end) {
  let prev1 = 0;
  let prev2 = 0;

  for (let i = start; i <= end; i++) {
    let current = Math.max(prev2 + nums[i], prev2);
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

console.log(rob(nums));
