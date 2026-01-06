// heap sort
// hume isme array milega

// isme hum array ko max heap bnayenge
// or 1st value ko last se swap karenge jo bda hoga
// use existing array me push karenge
// reduce the array size
// and again we heapyfy down
// and repeat the process

let arr = [4, 10, 3, 5, 1];

const heapSort = (arr) => {
  let n = arr.length;

  // STEP 1: Max Heap banao
  for (let i = n - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  // STEP 2: Sorting
  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // root ko last me bhejo
    heapifyDown(arr, 0, i); // heap size chhoti
  }
};

function heapifyDown(arr, i, n) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}

heapSort(arr);
console.log(arr); // [1, 3, 4, 5, 10]
