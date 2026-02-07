// Dijkstra's Algorithm - Shortest Path (Weighted Graph)

// Graph: graph[node] = [ [neighbor, weight], ... ]
const graph = [
  [
    [1, 4],
    [2, 2],
  ],
  [
    [2, 1],
    [3, 5],
  ],
  [[3, 8]],
  [],
];

// ------------------ Min Heap (Priority Queue) ------------------

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return min;
  }

  bubbleUp() {
    let i = this.heap.length - 1;

    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);

      if (this.heap[parent][0] <= this.heap[i][0]) break;

      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];

      i = parent;
    }
  }

  bubbleDown() {
    let i = 0;
    let n = this.heap.length;

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }

      if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }

      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];

      i = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// ------------------ Dijkstra Algorithm ------------------

function dijkstra(graph, src) {
  const n = graph.length;

  // Distance array
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  // Priority Queue: [distance, node]
  const pq = new MinHeap();
  pq.push([0, src]);

  while (!pq.isEmpty()) {
    const [currDist, node] = pq.pop();

    // Skip outdated entry
    if (currDist > dist[node]) continue;

    // Visit neighbors
    for (let [next, weight] of graph[node]) {
      let newDist = currDist + weight; // ye current or next node ke weight ko add karta hai

      if (newDist < dist[next]) {
        dist[next] = newDist;
        pq.push([newDist, next]);
      }
    }
  }

  return dist;
}

// ------------------ Run ------------------

const result = dijkstra(graph, 0);

console.log("Shortest distances from 0:");
console.log(result);
