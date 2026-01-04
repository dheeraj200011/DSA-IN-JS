// valid Binary search tree

// ism hum recusrion karenge
// iskme hum 2 params lenge curr value, min, max
// tarversal(curr.left, min, curr.val) && tarversal(curr.right, curr.val, max)

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

const isValidBst = (root) => {
  if (!root) return;

  function tarversal(curr, min, max) {
    if (!curr) return true;
    // ye bst ko validate karne ka base code hai
    if (curr.val <= min || curr.val >= max) {
      return false;
    }
    return (
      tarversal(curr.left, min, curr.val) &&
      tarversal(curr.right, curr.val, max)
    );
  }

  return tarversal(root, -Infinity, -Infinity);
};

console.log(isValidBst(root));
