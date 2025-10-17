// Merge Sort Array
// output : nums1 = [1,2,2,3,5,6]

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

nums1 = nums1.slice(0, 3);

// agar me nums1 ka copy karne pare nums1 empty ho jayega

const mergeArray = (nums1, nums2, m, n) => {
  let nums1Copy = [...nums1];
  nums1.length = 0;
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (nums1Copy[p1] < nums2[p2]) {
      nums1.push(nums1Copy[p1]);
      p1++;
    } else {
      nums1.push(nums2[p2]);
      p2++;
    }
  }
  return nums1;
};

console.log(mergeArray(nums1, nums2, m, n));
