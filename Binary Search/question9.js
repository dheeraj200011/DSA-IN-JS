// Peak index in a mountain array

const arr = [0, 10, 15, 2];

const peakIndex = (arr) => {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let m = Math.floor((l + r) / 2);

    if (arr[m] < arr[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
};

console.log(peakIndex(arr));
