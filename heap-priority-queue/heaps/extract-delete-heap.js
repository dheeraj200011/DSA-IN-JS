// extract/delete heap

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push = val;
    this.heapyfyUp(this.heap.length - 1);
  }

  heapyfyUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[index] >= this.heap[parent]) break;
      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];

      index = parent;
    }
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let min = this.heap[0];
    // isse humara min heap khatam ho jayega
    this.heap[0] = this.heap.pop(); // hume last elem ko pop karke top me rakha
    this.heapyfyDown(0);

    return min;
  }

  heapyfyDown(index) {
    let n = this.heap.length; // ye add kana jaruri hai nhi to loop chlata rhega

    while (true) {
      let smallest = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      // index or left me jo chota hai wo smaillest hai

      if (left < n && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      // index or right me jo chota hai wo smaillest hai
      if (right < n && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      // ab jo smallest hai usse index ke sath swap karma hoga

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];

      index = smallest;
    }
  }

  peek() {
    return this.heap[0];
  }
}
