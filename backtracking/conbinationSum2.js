// combination sum 2

const candidates = [10, 1, 2, 7, 6, 1, 5];
const target = 8;

const combinationSum = (candidates, target) => {
  const results = [];
  candidates.sort((a, b) => a - b);

  function backtrack(path, start, reamaining) {
    if (reamaining === 0) {
      results.push([...path]);
      return;
    }

    if (reamaining < 0) return;

    for (let i = start; i < candidates.length; i++) {
      // ye line same reapat array nhi banane deti
      // lekin ye tabhi kaam karegi jab array sort ho repeat elem ka
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      backtrack(path, i + 1, reamaining - candidates[i]);
      path.pop();
    }
  }
  backtrack([], 0, target);
  return results;
};

console.log(combinationSum(candidates, target));
