// insert node in heap
// wen implement heapify

// points
// first me add node in an array
// than we check the with root
// if they follow the rule we return inless we swap node with the root

// hum min heap create karenge

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val); // elm ko last me rakha
    this.heapyfyUp(this.heap.length - 1); // usko upar sahi jagah tak le gaye
  }

  heapyfyUp(index) {
    // yha jo new value rakha uske index ko daala jayega
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
}

let heap = new MinHeap();
heap.insert(10);
console.log(heap);
