// linear search

const arr = [4, 9, 1, 0, 2];

const getIndex = (arr) => {
  const target = 0; // get the index of target in array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
};

console.log(getIndex(arr));
