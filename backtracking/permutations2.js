// permutation 2

const nums = [1, 1, 2];

const permutation = (nums) => {
  const result = [];
  nums.sort((a, b) => a - b);

  function backtrack(path, nums) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      path.push(nums[i]);
      backtrack(path, [...nums.slice(0, i), ...nums.slice(i + 1)]);
      //ye jo bhi i - 1 agar repeat hua usse remove karke new array create karega
      // jiske last value duplicate na ho
      path.pop();
    }
  }

  backtrack([], nums);
  return result;
};

console.log(permutation(nums));
