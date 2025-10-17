// power of two = use n/2

const poweroftwo = (n) => {
  if (n === 1) {
    return true;
  }
  if (n < 1 || n % 2 !== 0) {
    return false;
  }
  return poweroftwo(n / 2);
};

console.log(poweroftwo(7)); // Output: false
console.log(poweroftwo(8)); // Output: true
console.log(poweroftwo(1)); // Output: true
