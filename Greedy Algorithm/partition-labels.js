// partition labels

const s = "ababcbacadefegdehijhklij";

const partition = (s) => {
  let first = Array(26).fill(-1);
  let last = Array(26).fill(-1);
  let ans = [];

  for (let i = 0; i < s.length; i++) {
    // ye charcode nikalta hai
    let curr = s.charCodeAt(i) - 97;
    // gar first letter value 0 ya usse kam hai to uske last index ko store karte hai
    if (first[curr] < 0) {
      first[curr] = i;
    }
    last[curr] = i;
  }
  // ab hum twio pointer ka use karenge
  let start = 0;
  let lastPointer = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = s.charCodeAt(i) - 97;
    // yah par hum next group me enter kar rhe hai
    if (lastPointer < first[curr]) {
      // partition length formual
      // length = endIndex - startIndex + 1
      ans.push(lastPointer - start + 1);
      start = lastPointer = i;
    }
    // yha last pointer ka max index store hoga
    lastPointer = Math.max(lastPointer, last[curr]);
  }

  // 🔥 last partition ye jo bach gye hai unke liye
  ans.push(lastPointer - start + 1);
  return ans;
};

console.log(partition(s));
