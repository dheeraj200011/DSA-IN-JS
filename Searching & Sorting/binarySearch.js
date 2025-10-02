// binary search
// it work on the formula of n/2

//const arr = [-1, 0, 3, 5, 9, 12];
const arr = [5];

const binarySearch = (arr) => {
  const target = 5;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor(left + right) / 2;

    if (target === arr[middle]) {
      return middle;
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

console.log(binarySearch(arr));
