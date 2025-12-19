const arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];

const getSingle = (arr) => {
  let l = 0;
  let r = arr.length - 1;
  let leftCount;

  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (m % 2 === 1) {
      m--;
    }
    if (arr[m] === arr[m + 1]) {
      l = m + 2;
    } else {
      r = m;
    }
  }

  return arr[l];
};

console.log(getSingle(arr)); // 2
