// last stone weight

const nums = [2, 7, 4, 1, 8, 1];

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] >= this.heap[index]) break;
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  heapifyDown(index) {
    let n = this.heap.length;
    while (true) {
      let largest = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if (left < n && this.heap[left] > this.heap[largest]) largest = left;
      if (right < n && this.heap[right] > this.heap[largest]) largest = right;

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      index = largest;
    }
  }

  size() {
    return this.heap.length;
  }
}

function lastStonesWeight(nums) {
  let heap = new MaxHeap();

  for (let num of nums) {
    heap.insert(num);
  }

  while (heap.size() > 1) {
    let p = heap.remove();
    let q = heap.remove();

    if (p != q) {
      heap.insert(p - q);
    }
  }

  return heap.size() === 1 ? heap.heap[0] : 0;
}

console.log(lastStonesWeight([2, 7, 4, 1, 8, 1])); // ✅ 1
