// bucket sort
// distribute elem in bucket
// sort the each bucket
// exisiting array me new values ko assign karna

// ye algo distribution me use hota hai for data collection
// O(n + k)

const arr = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23];

const bucketSort = (arr) => {
  if (arr.length === 0) return arr;
  let n = arr.length; // ye best case hai hum chahte hai ki bucket me ek hi number jo taki sorting optimize ho sake

  //create buckets
  let buckets = Array.from({ length: n }, () => []);

  // distribute elem
  for (let i = 0; i < n; i++) {
    let index = Math.floor(arr[i] * n);
    buckets[index].push(arr[i]);
  }
  // sort each bucket

  for (let i = 0; i < n; i++) {
    buckets[i].sort((a, b) => a - b);
  }

  // merge buckets
  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let val of buckets[i]) {
      arr[index++] = val;
    }
  }

  return arr;
};

console.log(bucketSort(arr));
