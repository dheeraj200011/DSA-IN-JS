const num = -259;

const countDigit = (num) => {
  if (num === 0) return 1;
  // if the nums is -ve
  num = Math.abs(num); // ye -ve ko positive kar dega
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count += 1;
  }
  return count;
};

console.log(countDigit(num));

// Math.abs // -ve to +ve number
// Math.round // 0.5 ko 1 or 1.2 ko 1 kar dega
// Math.ceil // ye 1o.2 ko 11 or 1o.6 ko 11 kar dega
// MATH.floor // ye 10.1 ko 10 or 10.8 ko 10 hi kar dega

// via string

const countViaStr = (num) => {
  num = Math.abs(num);
  num = num.toString().length;
  return num;
};

console.log(countViaStr(num));
