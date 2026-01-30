// Radix sort
// Radix Sort ek non-comparison sorting algorithm hai.
// Ye numbers ko digit by digit sort karta hai —
// 👉 ones place → tens place → hundreds place …

// Important rule: har digit par stable sort lagta hai (usually Counting Sort).

// redix code chota hai or usme counting stable sort ka code hoga

const arr = [170, 45, 75, 90, 802, 24, 2, 66];

const radixSort = (arr) => {
  let max = Math.max(...arr);

  // ye main logic hai
  // exp = 1 -> ones, 10 -> tens, 100 -> hundreds
  for (let exp = 1; Math.floor(max / exp) > 0; exp = exp * 10) {
    countingSort(arr, exp);
  }
  return arr;
};

function countingSort(arr, exp) {
  let count = new Array(10).fill(0);

  // count digits
  for (let i = 0; i < arr.length; i++) {
    let digit = Math.floor(arr[i] / exp) % 10; // ye 10 se multipy ho rha hai recursion kim form me radix func me isliye 10 ka use ho rha hai
    count[digit]++;
  }

  // prefix sum
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  // build output array
  let output = new Array(arr.length).fill(0);

  for (let i = arr.length - 1; i >= 0; i--) {
    let digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  // existing array me change
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

console.log(radixSort(arr));
