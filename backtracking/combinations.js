// combinations using backtracking
// bactrack me start ka unique elements ke liye hota hai
// start ale me right side traverse karte hai
// time compelxity: O(N*2powN)

const combinations = (n, k) => {
  let results = [];

  function backtrack(path, start) {
    if (path.length === k) {
      results.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(path, i + 1);
      path.pop();
    }
  }

  backtrack([], 1);
  return results;
};

console.log(combinations(4, 2));
