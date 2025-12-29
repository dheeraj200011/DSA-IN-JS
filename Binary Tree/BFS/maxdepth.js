// max depth

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(7);
root.left.left.right = new TreeNode(8);

const maxdepth = (root) => {
  if (!root) return 0;

  let leftMaxdepth = maxdepth(root.left);
  let rightMaxdepth = maxdepth(root.right);

  return Math.max(leftMaxdepth, rightMaxdepth) + 1;
};

console.log(maxdepth(root));

// second approach

const maxdepth2 = (root) => {
  if (!root) return;
  let maxdepth = 0;
  function traverse(curr, depth) {
    maxdepth = Math.max(depth, maxdepth);
    if (curr.left) traverse(curr.left, depth + 1);
    if (curr.right) traverse(curr.right, depth + 1);
  }

  traverse(root, 0);
  return maxdepth + 1; // +1 root ke liye hai
};

console.log(maxdepth2(root));
