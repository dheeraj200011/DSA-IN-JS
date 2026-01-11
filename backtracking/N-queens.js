// N-queens
// ye hard question hai

function solveQueens(n) {
  // n is no. of queens
  let result = [];
  let board = [];

  // craete empty board of n *n
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(".");
    }
    board.push(row);
  }

  function backtrack(board, row, colSet, adjSet, antiAdjSet) {
    if (row === n) {
      result.push(board.map((r) => r.join("")));
      return;
    }

    // check column
    for (let col = 0; col < n; col++) {
      if (
        colSet.has(col) ||
        adjSet.has(row - col) ||
        antiAdjSet.has(row + col)
      ) {
        continue;
      }

      // ye 4 line main logic hai

      board[row][col] = "Q";
      colSet.add(col); // ye single column hai
      adjSet.add(row - col); // ye adjacent column hai
      antiAdjSet.add(row + col); // ye anti-adjacent hai

      backtrack(board, row + 1, colSet, adjSet, antiAdjSet);

      board[row][col] = ".";
      colSet.delete(col); // ye single column hai
      adjSet.delete(row - col); // ye adjacent column hai
      antiAdjSet.delete(row + col); // ye anti-adjacent hai
    }
  }
  backtrack(board, 0, new Set(), new Set(), new Set());
  return result;
}

console.log(solveQueens(4));
