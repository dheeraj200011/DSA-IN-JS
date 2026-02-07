// Kahn algo (bfs)
// topological sort
// kahn;s algo me indegree ka use hota hai
// ye sirf direct acyclic graph par work karta hai

const n = 6;
const adj = [[], [], [3], [1], [0, 1], [0, 2]];

const topologicalSort = (n, graph) => {
  // calculate indegree
  let indegree = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (x of graph[i]) {
      indegree[x]++;
    }
  }

  let queue = [];
  let ans = [];
  for (let val of indegree) {
    if (val === 0) {
      queue.push(val);
    }
  }
  while (queue.length) {
    let curr = queue.shift();
    ans.push(curr);
    for (let neighbour of graph[curr]) {
      indegree[neighbour]--;

      if (indegree[neighbour] === 0) {
        queue.push(neighbour);
      }
    }
  }
  return ans;
};

console.log(topologicalSort(n, adj));
