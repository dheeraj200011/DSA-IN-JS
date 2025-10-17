// get the single element of an arrray

const nums = [4, 1, 2, 1, 2];

const singleNumber = (nums) => {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (hash[num]) {
      hash[num] += 1; // Increment the count in the hash
    } else {
      hash[num] = 1; // Initialize count as 1
    }
  }
  for (key in hash) {
    if (hash[key] === 1) {
      return key;
    }
  }
};

console.log(singleNumber(nums)); // Output: 4

// via XOR
// iska istemal karke hum 

const getSingleNum = (nums) => {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }

  return result;
};

console.log(getSingleNum(nums)); // Output: 4
