// find the middle value

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const findMiddle = (input) => {
  let l = 0;
  let r = input.length - 1;

  let middleIndex = Math.floor((l + r) / 2);
  return input[middleIndex];
};

console.log(findMiddle(input));
