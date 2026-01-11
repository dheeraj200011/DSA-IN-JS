// two city scheduling

let costs = [
  [259, 770],
  [448, 54],
  [926, 667],
  [184, 139],
  [840, 118],
  [577, 469],
]; // output: 1859

// formula : calculete b - a ab jo positive rhega ussi ke acording
// ex: [259, 770] : 770 - 259 : 511 : to hum  a se travel krana hoga
// in short postive to a nhi to b
// note : isme addhe log a me or aadhe b me honge to agar a me single +ve hai to hum least negatibe=ve ko bhi a me bhej denge taki equal ho jaye

const twoCitySchedule = (costs) => {
  // sort karenge b -a se
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let total = 0;
  let n = costs.length / 2;

  console.log(costs);

  // ab array profits ke according sort ho gye hai sbstarct karke jiski value jyada hogi uske according
  // first half
  for (let i = 0; i < n; i++) {
    total += costs[i][0];
  }
  // second half
  for (let i = n; i < costs.length; i++) {
    total += costs[i][1];
  }

  return total;
};

console.log(twoCitySchedule(costs));
