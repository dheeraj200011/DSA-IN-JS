// square root of x

const mysqrt = (x) => {
  let i = 0;

  while ((i + 1) * (i + 1) <= x) {
    i++;
  }
  return i;
};
console.log(mysqrt(20));
