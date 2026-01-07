// Subsets
// substes me 2ki pwer n hota hai
// ex: [1,2,3] n = 3 : 2 ki pow 3 : 8 to inten hi subsets honge

const nums = [1, 2, 3];

const subsets = (nums) => {
  let result = [];

  function backtrack(start, path) {
    // path me hum node edges ko rakhte hai traverse path
    result.push([...path]); // isme hum empty se start karenge or path me jo value add hofi usse bhi rakheneg
    // ye backtrack ka logic hai
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]); // path me value ko add karenge
      backtrack(i + 1, path); // or next node par move karenge
      path.pop(); // phir jo path ka elem tha usse bahar kar denge
    }
  }

  backtrack(0, []); // [] iska means hai emty se start ho or 0 index se
  return result;
};

console.log(subsets(nums));
