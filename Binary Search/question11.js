// find k closest elements
// ye range serach me bhi kamm ayega

const arr = [1, 2, 3, 4, 5];
let k = 4;
let x = 3;

const findClosest = (arr, k, x) => {
  let l = 0;
  let r = arr.length - k; // 1

  while (l < r) {
    let m = Math.floor((l + r) / 2); // 0

    if (x - arr[m] > arr[m + k] - x) {
      // isme [m + k ] > [m] tabhi left move hoga agar zero hua to to move hoga 1 hoy=te hi stop ho jayega
      l = m + 1;
    } else {
      r = m;
    }
  }
  return arr.slice(l, l + k);
};

console.log(findClosest(arr, k, x));
