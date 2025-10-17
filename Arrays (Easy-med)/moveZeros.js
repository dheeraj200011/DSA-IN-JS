const arr = [0, 1, 3, 0, 12];
// two pointer approach

const moveZeros = (arr) => {
  let p1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[p1]] = [arr[p1], arr[i]];
      p1++;
    }
  }
  return arr;
};

console.log(moveZeros(arr));
