// Car pooling

let trips = [
  [2, 1, 5],
  [3, 3, 7],
];

let capacity = 5;

const carPooling = (trips, capacity) => {
  // phle km ka array create hoga
  let diff = Array(1000).fill(0);

  for (let [passengers, start, end] of trips) {
    diff[start] += passengers;
    diff[end] -= passengers;
  }

  let currCapacity = 0;

  for (let i = 0; i < diff.length; i++) {
    currCapacity += diff[i];
    if (currCapacity > capacity) return false;
  }
  return true;
};

console.log(carPooling(trips, capacity));
