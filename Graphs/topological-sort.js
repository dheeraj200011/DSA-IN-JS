// Topological Sort
// isme hum linear edges ke base par hoga to tail value hoga wo arrow value se phle aayega yhi main concept hai
// isme simply dfs chega
// or output array reverse me hoga
// isme simple dfs se traverse karna hai or array me ans ko leke reverse karna hai bas

const n = 6;
const adj = [[], [], [3], [1], [0, 1], [0, 2]];

const topological = (n, graph) => {
  let ans = [];
  let visited = new Set();

  const dfs = (curr) => {
    visited.add(curr);

    for (let nei of graph[curr]) {
      if (!visited.has(nei)) {
        dfs(nei);
      }
    }

    // ✅ saare neighbours ke baad hi push
    ans.push(curr);
  };

  // graph disconnected ho sakta hai
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
    }
  }

  return ans.reverse();
};

console.log(topological(n, adj));
