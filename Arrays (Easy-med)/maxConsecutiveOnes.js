const arr = [1, 1, 0, 2, 2, 2, 4, 4, 4, 4, 4, 4];
// output: 3

const sumConsecutiveNums = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      count = 1;
    }
  }
  return count;
};

console.log(sumConsecutiveNums(arr));
