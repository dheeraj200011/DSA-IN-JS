// merge sort

// merge sort me 2 step me work hota hai
//1. hum mergesort ko define karenge jisme merge array return hoga
//2. merge array ke login ko complete rkhna hoga

const arr = [8, 4, 5, 6, 9, 1, 3, 6];

const mergeArray = (arr1, arr2) => {
  let sortArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortArray.push(arr1[i]);
      i++;
    } else {
      sortArray.push(arr2[j]);
      j++;
    }
  }

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

const mergesort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergesort(arr.slice(0, mid));
  const right = mergesort(arr.slice(mid));

  return mergeArray(left, right);
};

console.log(mergesort(arr));
