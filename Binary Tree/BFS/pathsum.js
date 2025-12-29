// Path Sum

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

const targetSum = 22;

const hasPathSum = (root, targetSum) => {
  if (!root) return false;

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  let remainingSum = targetSum - root.val;

  return (
    hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum)
  );
};

console.log(hasPathSum(root, targetSum));

// another option

const pathSum = (root, value, targetSum) => {
  if (!root) return false;

  let currentSum = value + root.val;

  // leaf node
  if (!root.left && !root.right) {
    return currentSum === targetSum;
  }

  return (
    pathSum(root.left, currentSum, targetSum) ||
    pathSum(root.right, currentSum, targetSum)
  );
};

console.log(root, 0, targetSum);
