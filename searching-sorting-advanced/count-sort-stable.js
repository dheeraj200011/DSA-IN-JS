// count-sort -stable

// steps

// find Range
// create count array
// prefix sum array
// fill sorted array

const arr = [1, 2, 2, 3, 3, 4, 8];

const countingSortStable = (arr) => {
  if (arr.length === 0) return arr;

  // get range
  let max = Math.max(...arr);
  // create count array
  let count = new Array(max + 1).fill(0);

  // craete count of elem

  for (nums of arr) {
    count[nums]++;
  }
  // prefix sum
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // output array
  let output = new Array(arr.length);

  // ab reverse order me traverse hoga
  for (let i = arr.length - 1; i >= 0; i--) {
    let curr = arr[i]; // num me last index hai
    output[count[curr] - 1] = curr; // ek index -1 karke value ko store karta jayega
    count[curr]--; // same ye bhi ek value -1 hota rhega
  }

  return output;
};

console.log(countingSortStable(arr));
