// Invert Binary Tree

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

const invertBinaryTree = (root) => {
  if (!root) return;
  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();

    // swap

    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};

console.log(invertBinaryTree(root));
