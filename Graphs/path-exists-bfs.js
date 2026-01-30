// Find if path exists

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

  let queue = [source];
  let visited = new Set();
  visited.set(source);

  while (queue.length) {
    let curr = queue.shift();
    if (curr === destination) return true;

    for (nei of map[curr]) {
      if (!visited.has(nei)) {
        queue.push(nei);
        visited.add(nei);
      }
    }
  }
  return false;
};

console.log(validPath(node, edges, source, 2));
