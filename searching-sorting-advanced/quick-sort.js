// quick sort
// divide and conquer
// ye sorting ke liye best nhi hai
// quick sort better hai merge sort se kyuki ye sapce ko use nhi karta or faster in use hota hai

// 1. Base case
// 2. Pick pivot
// 3. Left array (< pivot)
// 4. Right array (> pivot)
// 5. Recursively sort left & right
// 6. Merge

// isme simple hume last elem ko pivot lena hai or comapre karna hai ki pivot se chote left me honge or bade right me

const quickSort = (arr) => {
  // base case
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // ye recursive method hai

  return [...quickSort(left), pivot, ...quickSort(right)];
};

let arr = [4, 2, 7, 1, 9, 3];
console.log(quickSort(arr));
