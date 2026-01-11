// const g = [1, 2, 3];
// const s = [1, 1];

const g = [1, 2];
const s = [1, 2, 3];

const findContentChildren = (g, s) => {
  // sort both arrays
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0; // child pointer
  let j = 0; // cookie pointer
  let count = 0;

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      count++; // child satisfied
      i++;
      j++;
    } else {
      j++; // cookie too small, try bigger cookie
    }
  }

  return count;
};

console.log(findContentChildren(g, s));
