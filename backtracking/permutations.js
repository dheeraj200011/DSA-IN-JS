// permutations using backtracking
// yh nahum start ka use nhi karenge kyuki hum same values par kaam kar rhe hai
// jabki start sirf unique value ko leta hai
// start ale me right side traverse karte hai
// permutation ke case me hum kahi par nhi traverse karte hai
// time compelxity: O(N*2powN)

const nums = [1, 2, 3];

const permutation = (nums) => {
  let results = [];

  function backtrack(path) {
    if (path.length === nums.length) {
      results.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue;
      path.push(nums[i]); // elem ko add kiya payh me
      backtrack(path); // next elem ko get kiya
      path.pop(); // phle wale ko pop kiya
    }
  }

  backtrack([]);
  return results;
};

console.log(permutation(nums));
