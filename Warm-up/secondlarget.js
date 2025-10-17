arr = [4, 9, 0, 2, 8, 7, 1];

const secondLargest = (arr) => {
  if (arr.length === 0 && arr.length < 2) {
    return null;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(secondLargest(arr));

// another

const secLargest = (arr) => {
  let secondLargest;
  let sortedArray = arr.sort((a, b) => a - b);
  secondLargest = sortedArray[arr.length - 2];
  return secondLargest;
};

console.log(secLargest(arr));

// infinity yha par javascript me sabse chota number hota hai

// line8 :  yha par hum apne first largest ke prev value ko second largest me store kar rhe hai sabse badi value ko store karne se phle

// line  10 : yha second larget agar arr[i] se bda hai jo humne upar store kiya hai

// line 13: arr[i] !== firstLargest ye tab kaam aayega jab first larger number ka duplicate hoga
