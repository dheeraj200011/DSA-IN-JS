class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// isme hum left or right ka length nikal rhe hai

const isBalanced = (root) => {
  let ans = true;
  let traverse = (curr) => {
    // length nikalne ka process
    if (!curr) return 0;
    let leftHeight = traverse(curr.left);
    let rightHeight = traverse(curr.right);

    // ye main logic hai
    if (leftHeight - rightHeight > 1) {
      return (ans = ans && false);
    }
    return Math.max(leftHeight + rightHeight) + 1;
  };

  traverse(root);
  return ans;
};

console.log(isBalanced(root));
