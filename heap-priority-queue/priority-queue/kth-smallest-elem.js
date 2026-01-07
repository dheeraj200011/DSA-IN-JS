// KTH SMALLEST ELEMENT
// matrix ke case me val, row,col ye teeno rakhe jate hai

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.up();
  }

  up() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.heap[p][0] <= this.heap[i][0]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  remove() {
    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.down(0);
    return root;
  }

  down(i) {
    let n = this.heap.length;
    while (true) {
      let s = i;
      let l = 2 * i + 1;
      let r = 2 * i + 2;

      if (l < n && this.heap[l][0] < this.heap[s][0]) s = l;
      if (r < n && this.heap[r][0] < this.heap[s][0]) s = r;

      if (s === i) break;
      [this.heap[i], this.heap[s]] = [this.heap[s], this.heap[i]];
      i = s;
    }
  }

  size() {
    return this.heap.length;
  }
}

let matrix = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];
let k = 4;

function kSmallestElem(matrix, k) {
  let heap = new MinHeap();
  let count = 0;

  // Step 1: har row ka first element
  for (let r = 0; r < matrix.length; r++) {
    heap.insert({ val: matrix[r][0], row: r, col: 0 });
  }

  // Step 2: k times pop
  while (heap.size() > 0) {
    let { val, row, col } = heap.remove();
    count++;

    if (count === k) return val;

    // Step 3: same row ka next element
    if (col + 1 < matrix[row].length) {
      heap.insert({
        val: matrix[row][col + 1],
        row: row,
        col: col + 1
      });
    }
  }
}


console.log(kSmallestElem(matrix, k));
