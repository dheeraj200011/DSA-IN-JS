// First Bad Version

const bad = 4;
const n = 5;

const solution = function (bad) {
  return function (n) {
    let l = 1;
    let r = n;

    while (l < r) {
      let m = l + Math.floor(r / 2);

      if (m !== bad) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    return r;
  };
};

console.log(solution(bad));
