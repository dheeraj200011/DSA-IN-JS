// Word Search using Backtracking

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

let word = "ABCCED";

const wordsearch = (board, word) => {
  let rows = board.length;
  let cols = board[0].length;

  function backtrack(r, c, index) {
    // base case
    if (index === word.length) return true;

    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      board[r][c] !== word[index]
    ) {
      return false;
    }

    let temp = board[r][c];
    board[r][c] = "#";

    if (backtrack(r, c + 1, index + 1)) return true; // right
    if (backtrack(r, c - 1, index + 1)) return true; // left
    if (backtrack(r + 1, c, index + 1)) return true; // down
    if (backtrack(r - 1, c, index + 1)) return true; // up

    board[r][c] = temp;
    return false;
  }

  // traverse all elements
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === word[0]) {
        if (backtrack(r, c, 0)) return true;
      }
    }
  }
  return false;
};

console.log(wordsearch(board, word)); // true
