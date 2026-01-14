// task schedular
// 👉 Greedy + Frequency counting
// Sabse zyada baar aane wala task (max frequency) sabse zyada space force karta hai
// Uske around hi schedule banta hai
let tasks = ["A", "A", "A", "B", "B", "B"];
let n = 2;
// A,B,_,A,B,_,A,B, : OUTPUT 8

const taskSchedule = (tasks, n) => {
  let freq = Array(26).fill(0);

  // frequency count
  for (let i = 0; i < tasks.length; i++) {
    let curr = tasks[i].charCodeAt(0) - 65;
    freq[curr]++;
  }

  // descending sort
  freq.sort((a, b) => b - a);

  let maxFreq = freq[0];
  let countMax = 0;

  for (let f of freq) {
    if (f === maxFreq) countMax++;
  }

  return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + countMax);
};

console.log(taskSchedule(tasks, n));

// n + 1 : ye sample size ban hai
// // A,_,_, : YHA 3 HOGA
// maxfreq -1 : ye jo letter sabse badi frewq ka hai usse -1 kar rhe hai
// countMax : ye last me jo aa rha hoga wo hoga
// result = Math.max(tasks.length, (maxFreq - 1) * (n + 1) + countMax); // ye formula hai
