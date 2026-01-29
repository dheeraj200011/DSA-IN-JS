// DFS IN GRAPHS
// dfs me stack use hoga
// clone graph plroblem same hai bs isme stack use hoga

class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

const cloneGraph = (root) => {
  if (!root) return null;
  let stack = [root];
  let visited = new Map();
  let cloneRoot = new Node(root.val);

  visited.set(root, cloneRoot);

  while (stack.length) {
    let curr = stack.pop();
    for (let nei of curr.neighbors) {
      if (!visited.has(nei)) {
        stack.push(nei);
        visited.set(nei, new Node(nei.val));
      }
    }
    let cloneCurr = visited.get(curr);
    cloneCurr.neighbors.push(visited.get(nei));
  }

  return cloneRoot;
};
