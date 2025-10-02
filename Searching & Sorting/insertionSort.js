// insertion sort

const arr = [7, 4, 3, 5, 1, 2];

const insertionSort = (arr) => {
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    let current = arr[i];
    let prev = i - 1;

    // keep shifting elements until the correct spot is found
    while (prev >= 0 && arr[prev] > current) {
      arr[prev + 1] = arr[prev]; // isme ye prev elemnt age chla jayega o
      prev--; // or hum p ko p-1 karje uske next prev par le jayengqa.
    }

    // place current at its correct position
    arr[prev + 1] = current;
  }

  return arr;
};

console.log(insertionSort(arr));
