// palindrome partitioning

const s = "aab";

const palindromePartitioning = (s) => {
  let result = [];

  function palindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
      if (str[i] !== str[j]) return false;
      i++;
      j--;
    }
    return true;
  }

  function backtrack(path, remainingStr) {
    // ✅ base case
    if (remainingStr.length === 0) {
      result.push([...path]);
      return;
    }

    for (let i = 1; i <= remainingStr.length; i++) {
      let prefix = remainingStr.substring(0, i);
      if (!palindrome(prefix)) continue;

      path.push(prefix);
      backtrack(path, remainingStr.substring(i));
      path.pop(); // backtrack
    }
  }

  backtrack([], s);
  return result;
};

console.log(palindromePartitioning(s));
