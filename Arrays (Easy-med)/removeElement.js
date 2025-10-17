// REMOVE ELEMENT FROM AN ARRAY WHICH IS EQUAL TO K VALUE

const arr = [3, 2, 2, 3, 1, 5, 3, 4, 8, 3];
const val = 3;

const removeElements = (arr, val) => {
  let k = 0;
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      newArray.push(arr[i]);
      k = k + 1;
    }
  }
  return [...newArray, k];
};
console.log(removeElements(arr, val));
