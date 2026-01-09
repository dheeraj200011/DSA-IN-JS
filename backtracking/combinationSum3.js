// combination Sum 3
const k = 3;
const n = 9;

const combinationSum3 = (k, n) => {
  const results = [];

  function backtrack(path, start, remaining) {
    if (path.length === k && remaining === 0) {
      results.push([...path]);
      return;
    }

    if (remaining < 0) return;

    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(path, i + 1, remaining - i);
      path.pop();
    }
  }

  backtrack([], 1, n);
  return results;
};

console.log(combinationSum3(k, n));
