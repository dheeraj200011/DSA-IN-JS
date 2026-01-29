// BFS IN GRAPH
// clone graph plroblem same hai bs isme queue use hoga
// bfs me queue use hoga

class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

const cloneGraph = (node) => {
  if (!node) return null;
  let queue = [node];
  let visited = new Map();
  let cloneRoot = new Node(node.val);
  visited.set(node, cloneRoot);

  while (queue.length) {
    let curr = queue.shift();

    for (nei of curr.neighbors) {
      if (!visited.has(nei)) {
        queue.push(nei);
        visited.set(nei, new Node(nei.val));
      }
      // cuurnt node me neighbour node ko jod denge
      let cloneCurr = visited.get(curr);
      cloneCurr.neighbors.push(visited.get(nei));
    }
  }
  return cloneRoot;
};


