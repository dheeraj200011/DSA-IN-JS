// Find if path exists using dfs recursion

const edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];

const validPath = (node, edges, source, destination) => {
  //phle hum adjacency list bnanan hoga
  // ex: [0,1] = 0: [1,2], 1: [0], 2: [0] like this
  let map = {};
  for (let [x, y] of edges) {
    if (!map[x]) return (map[x] = []);
    if (!map[y]) return (map[y] = []);
    // ye intercahnge karega x or y ko ye imp hai
    map[x].push(y);
    map[y].push(x);
  }

  let visited = new Set();

  let fn = (source) => {
    visited.add(source);
    if (source === destination) return true;
    for (nei of map[source]) {
      // nei is neighbour
      if (!visited.has(nei)) {
        fn(nei);
      }
    }
  };
  return fn(source);
};

console.log(validPath(source));
