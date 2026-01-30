let arr = [4, 2, 7, 1, 9, 3];

const findPivotIndex = (arr) => {
  let start = 0;
  let pivot = arr[arr.length - 1];

  let pos = -1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      pos++;
      [arr[i], arr[pos]] = [arr[pos], arr[i]];
    }
  }
  return pos + 1;
};

console.log(findPivotIndex(arr));
