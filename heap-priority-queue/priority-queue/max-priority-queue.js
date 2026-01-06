class MaxPriorityQueue {
  constructor() {
    this.queue = [];
  }

  // insert
  enqueue(val, priority) {
    this.queue.push({ val, priority });
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.queue.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.queue[index].priority <= this.queue[parent].priority) break;

      // swap whole object
      [this.queue[index], this.queue[parent]] = [
        this.queue[parent],
        this.queue[index],
      ];

      index = parent;
    }
  }

  // remove max priority element
  dequeue() {
    if (this.queue.length === 0) return null;
    if (this.queue.length === 1) return this.queue.pop();

    let max = this.queue[0];
    this.queue[0] = this.queue.pop();
    this.heapifyDown(0);
    return max;
  }

  heapifyDown(index) {
    let n = this.queue.length;

    while (true) {
      let largest = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if (
        left < n &&
        this.queue[left].priority > this.queue[largest].priority
      ) {
        largest = left;
      }

      if (
        right < n &&
        this.queue[right].priority > this.queue[largest].priority
      ) {
        largest = right;
      }

      if (largest === index) break;

      [this.queue[index], this.queue[largest]] = [
        this.queue[largest],
        this.queue[index],
      ];

      index = largest;
    }
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
