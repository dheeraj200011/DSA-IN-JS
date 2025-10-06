const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flatternArray = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArray.push(arr[i][j]);
    }
  }
  return newArray;
};

console.log(flatternArray(arr));
