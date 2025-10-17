// REMOVE DUPLICATES FROM SORTED ARRAY
// also find the number of unique elements

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = (arr) => {
  let newArray = [];
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
      k = k += 1;
    }
  }
  let dashArray = new Array(arr.length - k).fill("_");
  return [[...newArray, ...dashArray], k].flat();
};

console.log(removeDuplicates(arr));

