// top k frequent elements
// isme min heap ka use hoga
// kyuki hum jiski freq low hogi usse remove kar denge

const nums = [1, 1, 1, 2, 2, 3, 4, 3, 3, 5, 5];
let k = 2;

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

function kfrequent(nums, k) {
  let freq = {};
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  let heap = new MinHeap();

  for (let key in freq) {
    heap.insert([freq[key], Number(key)]); // [3, 1], [3, 3];
    if (heap.size() > k) heap.remove();
  }

  return heap.heap.map((x) => x[1]); // [1, 3]
}

console.log(kfrequent(nums, 2)); // ✅ [1, 3]
