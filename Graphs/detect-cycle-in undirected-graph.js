// detect-cycle-in undirected-graph
// ism ehume parent ko nhi lrna hota hai

const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 4],
];

// note: hum array sets me dfs karte time adj list create karenge

const hasCycles = (edges) => {
  // craete adj liust
  let map = {};
  for (let [x, y] of edges) {
    if (!map[x]) map[x] = [];
    if (!map[y]) map[y] = [];

    map[x].push(y);
    map[y].push(x);
  }

  let visited = new Set();
  let dfs = (curr, parent) => {
    visited.add(curr);
    for (let neighbour of map[curr]) {
      // ye dono cases imp hai
      if (!visited.has(neighbour)) {
        if (dfs(neighbour, curr)) return true;
      } else if (neighbour != parent) {
        // means neighour visited nhi hai tab tak true karo
        return true;
      }
    }

    return false;
  };
  return dfs(0, -1);
};

console.log(hasCycles(edges));
