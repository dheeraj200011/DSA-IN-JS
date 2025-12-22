// Container with most water

// get the more area is the output

// formula = Math.min(arr[i], arr[j]) x (i - j)

const nums = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // output: 49

const maxArea = (nums) => {
  let maxWater = 0;
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let area = Math.min(nums[i], nums[j]) * (j - i);
    maxWater = Math.max(maxWater, area);

    if (nums[i] < nums[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxWater;
};

console.log(maxArea(nums));
