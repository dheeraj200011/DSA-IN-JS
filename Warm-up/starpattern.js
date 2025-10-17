// double loops me jo i hai wo row hai aur j hai wo column wjase chalte hai

// let n = 4;

// first pattern
// ****
// ****
// ****
// ****

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// second pattern

// *
// **
// ***
// ****

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// third pattern

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let n = 5;

// for (let i = 0; i < n; i++) {
//   let number = "";
//   for (let j = 0; j < i + 1; j++) {
//     number += j + 1 + " ";
//   }
//   console.log(number);
// }

// fourth pattern

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j < i + 1; j++) {
//     row += i;
//   }
//   console.log(row);
// }

// reverse pattern

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// for (let i = n; i > 0; i--) {
//   let number = "";
//   for (let j = 1; j < i + 1; j++) {
//     number += j + " ";
//   }
//   console.log(number);
// }

// reverse star patteren

// *****
// ****
// ***
// **
// *

// for (let i = n; i > 0; i--) {
//   let row = "";
//   for (let j = 0; j < i; j++) {
//     row += "*" + " ";
//   }
//   console.log(row);
// }

// reverse column wise

//     *
//    **
//   ***
//  ****
// *****
