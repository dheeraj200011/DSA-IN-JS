// Diameter of binary tree

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
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(4);

const diameterBinaryTree = (root) => {
  if (!root) return;
  let maxDiameter = 0;

  function traverse(curr) {
    // ye left or roght node me traverse ke liye hai
    if (!curr) return 0;
    let leftSubtree = traverse(curr.left);
    let rightSubtree = traverse(curr.right);
    maxDiameter = Math.max(maxDiameter, leftSubtree + rightSubtree); // ye formula hai
    return Math.max(leftSubtree, rightSubtree) + 1; // ye root ko add karne ke liye hai
  }
  traverse(root);
  return maxDiameter;
};

console.log(diameterBinaryTree(root));
