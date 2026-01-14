// gas station

let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];
// isme hum cost se gas ko minus karte rhenge
// jha humari value 0 se badi hogi wahi answer hoga

const completeCircuit = (gas, cost) => {
  let totalgas = 0;
  let currgas = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    let diff = gas[i] - cost[i];

    totalgas += diff; // -2 -2 -2 +3 +3 = 0
    currgas += diff; // same

    // 🔑 yahi main logic hai
    if (currgas < 0) {
      start = i + 1;
      currgas = 0;
    }
  }

  return totalgas >= 0 ? start : -1;
};

console.log(completeCircuit(gas, cost));
