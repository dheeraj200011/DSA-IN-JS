// letter combinations

const digits = "23";

const letterCombinations = (digits) => {
  if (!digits.length) return [];

  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const result = [];

  function backtrack(index, path) {
    // 👉 index batata hai kaunsa digit chal raha hai
    // 👉 path ab tak bana hua letters ka array

    if (index === digits.length) {
      result.push(path.join(""));
      return;
    }

    // 🔍 current digit ke letters nikaalo
    let letters = map[digits[index]];

    // 🔁 har letter try karo
    for (let i = 0; i < letters.length; i++) {
      path.push(letters[i]); // choose
      backtrack(index + 1, path); // explore
      path.pop(); // un-choose (BACKTRACK)
    }
  }

  backtrack(0, []); // start: index = 0, path = empty array
  return result;
};

console.log(letterCombinations(digits));
