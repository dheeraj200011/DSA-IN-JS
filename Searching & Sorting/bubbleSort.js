let arr = [5, 2, 4, 1];

const sortArr = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // ye hoga jab array start ya beech me fully sort ho gya hoga
  }
  return arr;
};

console.log(sortArr(arr));
