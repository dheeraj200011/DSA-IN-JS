// Selection Sort

const arr = [7, 1, 5, 4, 3, 2];
let n = 6;

const selectionSort = (arr, n) => {
  for (i = 0; i < n - 1; i++) {
    let min = i;
    let swapped = false;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        [[arr[min], arr[j]]] = [[arr[j], arr[min]]];
        swapped = true;
      } else if (!swapped) {
        break;
      }
    }
  }
  return arr;
};

console.log(selectionSort(arr, n));
