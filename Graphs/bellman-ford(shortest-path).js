// Bellman Ford Algorithm - Shortest Path with Negative Weights
// bellman negative weights ko acche se handle karta hai

// formula
// if (dist[u] + weight < dist[v])
//    dist[v] = dist[u] + weight

const edges = [
  [0, 1, -1],
  [0, 2, 4],
  [1, 2, 3],
  [1, 3, 2],
  [1, 4, 2],
  [3, 2, 5],
  [3, 1, 1],
  [4, 3, -3],
];

const bellmanFord = (vertices, edges, src) => {
  // create distance
  const dist = new Array(vertices).fill(Infinity);
  dist[src] = 0;

  // 👉 Pehla loop → shortest path nikalne ke liye
  // 👉 Dusra loop → negative cycle check karne ke liye

  // relax egdes with the formula
  for (let i = 0; i < vertices - 1; i++) {
    for (let [u, v, w] of edges) {
      if (dist[u] != Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  // check negative cycle
  // Ye loop distance nikalne ke liye nahi hai ❌
  // Ye sirf check karne ke liye hai 👀
  for (let [u, v, w] of edges) {
    if (dist[u] != Infinity && dist[u] + w < dist[v]) {
      dist[v] = dist[u] + w;
    }
  }
  return dist;
};

console.log(bellmanFord(5, edges, 0));
