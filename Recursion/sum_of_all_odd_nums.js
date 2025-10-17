// sum of all odd numbers

const arr = [5, 2, 0, 3, 6, 7];
const sum = (n) => {
  if (n < 0) {
    return 0;
  }

  if (arr[n] % 2 !== 0) {
    return arr[n] + sum(n - 1);
  } else {
    return sum(n - 1);
  }
};

console.log(sum(arr.length - 1));
