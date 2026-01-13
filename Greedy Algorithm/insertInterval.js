// insert interval
// isme hume given array me new interval ko add karna hai jo jo bhi new interval ke beech ke numbers honege wo hat jayenge

const intervals = [
  [1, 3],
  [6, 9],
];
const newInterval = [2, 5];

function insert(intervals, newInterval) {
  let result = [];
  let i = 0;
  const n = intervals.length; // 1. Define n

  // Phase 1: Add intervals that come BEFORE the new interval (no overlap)
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Phase 2: Merge overlapping intervals
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // Phase 3: Add intervals that come AFTER the new interval
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

// 3. Call the function to see the result
console.log(insert(intervals, newInterval));
