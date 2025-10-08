// get the length of last word

const s = "fly me to the moon   ";

function strLastlength(str) {
  // first remove the last spaces
  let n = s.length - 1;
  let count = 0;
  while (n > 0) {
    if (s[n] == " ") {
      --n;
    } else {
      break;
    }
  }

  // calculate the word length

  for (let i = n; i >= 0; i--) {
    if (s[i] != " ") {
      --n;
      count++;
    } else {
      break;
    }
  }
  return count;
}

console.log(strLastlength(s));

// const s = "fly me to the moon   ";

// // second Approach get the length of second word

// function secondWordLength(s) {
//   let count = 0;
//   let n = s.length - 1;

//   while (n >= 0) {
//     if (s[n] != " ") {
//       break;
//     }
//     --n;
//   }

//   while (n >= 0) {
//     if (s[n] != " ") {
//       --n;
//     } else {
//       break;
//     }
//   }
//   console.log(n);

//   while (n >= 0) {
//     if (s[n] != " ") {
//       break;
//     }
//     --n;
//   }

//   for (let i = n; i >= 0; i--) {
//     if (s[i] != " ") {
//       --n;
//       count++;
//     } else {
//       break;
//     }
//   }

//   console.log(n);
//   return count;
// }

// console.log(secondWordLength(s));
