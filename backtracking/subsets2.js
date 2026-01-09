// subsets2
// isme duplicates nhi honge
// hum isme right side move karenge peech nhi jayenge
// time compelxity: O(N*2powN)

const arr = [1, 2, 2];

const subsetWithDup = (arr) => {
  let result = [];
  arr.sort((a, b) => a - b);

  function backtrack(path, start) {
    result.push([...path]);

    for (let i = start; i < arr.length; i++) {
      // isme hum apne curr elem kom apne peechlke elm se compare karte hai agar wo same hai to usse nhi rakhenge
      // agar wo right me hota to usse rakhte
      if (i > start && arr[i] === arr[i - 1]) continue; // ye hi main line hai
      path.push(arr[i]); // elem ko add kiya payh me
      backtrack(path, i + 1); // next elem ko get kiya
      path.pop(); // phle wale ko pop kiya
    }
  }

  backtrack([], 0);
  return result;
};

console.log(subsetWithDup(arr));
