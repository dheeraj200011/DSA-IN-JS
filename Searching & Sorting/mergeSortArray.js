// merge two aray in sort

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 8, 9];

const mergeArray = (arr1, arr2) => {
  let sortArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length) {
    if (arr1[i] < arr2[j]) {
      sortArray.push(arr1[i]);
      i++;
    } else {
      sortArray.push(arr2[j]);
      j++;
    }
  }

  // get remaining element

  while (i < arr1.length) {
    sortArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortArray.push(arr2[j]);
    j++;
  }

  return sortArray;
};

console.log(mergeArray(arr1, arr2));
