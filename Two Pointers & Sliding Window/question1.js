// Two Sum

let nums = [3, 2, 4, 5];
let target = 7;

const twoSum = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let pairToFind = target - nums[i];
    if (map[pairToFind] && map[pairToFind] != i) {
      return [i, map[pairToFind]];
    }
  }
};

console.log(twoSum(nums, target));
