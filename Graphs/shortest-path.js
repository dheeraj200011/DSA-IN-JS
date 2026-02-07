// shortest path - unweighted graphs
// isme level order traversal

let graph = [[1, 2], [3], [4], [5], [3], []];

const shortestDistance = (graph, start) => {
  let n = graph.length;

  let distance = new Array(n).fill(-1); // -1 = unreachable
  let visited = new Set();

  let queue = [start];
  visited.add(start);
  distance[start] = 0;

  let level = 0;

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();

      for (let neighbour of graph[curr]) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          distance[neighbour] = level + 1;
          queue.push(neighbour);
        }
      }
    }

    level++;
  }

  return distance;
};

console.log(shortestDistance(graph, 0));

// const minPathWithParent = (graph, start) => {
//   let n = graph.length;
//   let dist = new Array(n).fill(Infinity);
//   let parent = new Array(n).fill(-1);

//   dist[start] = 0;
//   let q = [start];

//   while (q.length) {
//     let curr = q.shift();

//     for (let nei of graph[curr]) {
//       if (dist[nei] === Infinity) {
//         dist[nei] = dist[curr] + 1;
//         parent[nei] = curr;
//         q.push(nei);
//       }
//     }
//   }

//   return { dist, parent };
// };

// console.log(minPathWithParent(graph, 0));

// it gets min path values
