// non overlapping intervals

const intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];

// formaula
// next.start < current.end overlap rule ye yaad rakhna hai

const eraseOverlaps = (intervals) => {
  let count = 0;

  intervals.sort((a, b) => a[1] - b[1]);
  // [1,2], [2,3], [1,3], [3,4]

  let currentEnd = intervals[0][1];
  // ye prev end ka 1 index hoga

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < currentEnd) {
      // overlap → remove this interval
      count++;
    } else {
      currentEnd = intervals[i][1];
    }
  }

  return count;
};

console.log(eraseOverlaps(intervals));
