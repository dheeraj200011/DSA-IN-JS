// guess number higher or lower

// guess(m) is laready given

const secret = 6;

const guess = (m) => {
  if (m === secret) return 0;
  if (m > secret) return -1;
  return 1;
};

const guessNumber = (n) => {
  let l = 1;
  let r = n;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    let pick = guess(m);

    if (pick === 0) {
      return m;
    } else if (pick < 0) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
};

console.log(guessNumber(10)); // 6
