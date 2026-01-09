// combination sum
// target sum jaise chizo me reaming ya substraction wala rule karnma chaiye

// 👉 i ka use kyu hota hai?
// Short answer:
// Same element ko repeat allow karne ke liye

let candidates = [2, 3, 6, 7];
let target = 7;

const combinationSum = (candidates, target) => {
  let result = [];

  function backtrack(path, start, remaining) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }

    if (remaining < 0) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(path, i, remaining - candidates[i]); //
      path.pop();
    }
  }
  backtrack([], 0, target);
  return result;
};

console.log(combinationSum(candidates, target));
