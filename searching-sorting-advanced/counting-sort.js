// counting sort
// agar range short hai to best hai nhi to worst
// ye range ke question me use hoga
// ye stable nhi hai

const arr = [4, 2, 2, 8, 3, 3, 1];

const countingSort = (arr) => {
  if (arr.length === 0) return arr;

  // get the max elemnet
  let max = Math.max(...arr); // ye range ke liye hai
  // create a count array of each elem
  let count = new Array(max + 1).fill(0);
  // insert count of elem in count array

  for (let num of arr) {
    count[num]++; // iske output last me hai
  }

  // ab uss count ke according new array me elem ko arrange karna hai
  let result = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      // ex: count[2] than count[1]
      // count[2] = 2  → push 2 two times
      // count[3] = 2  → push 3 two times
      result.push(i); // result: [2] than also same [2,2]
      count[i]--; // count[1] so again it run last count[0] and done
    }
  }
  return result;
};

console.log(countingSort(arr));

//  for (let num of arr) {
//     count[num]++;
//   }
// ye sort array ke accounrding count dega

//   1 → 1 baar

//   2 → 2 baar // ye ex ample me hai dry run

//   3 → 2 baar

//   4 → 1 baar

//   8 → 1 baar
