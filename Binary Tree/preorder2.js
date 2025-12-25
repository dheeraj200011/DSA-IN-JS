// Preorder Traversal - Iterative Approach
// root => left => right

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(2);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(2);

const preOrderIterartive = (root) => {
  if (!root) return;
};

console.log(preOrderIterartive(root));
