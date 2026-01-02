// populating next right pointer

// isme ek new chiz hai hum isme node me next ko bhi rakhan hoga isse chize or easy ho jayegi

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const nextRightPointer = (root) => {
  if (!root) return;
  let traverse = (curr) => {
    if (!curr || !curr.left) return;
    curr.left.next = curr.right; // ye important hai step

    if (curr.right && curr.next) {
      curr.right.next === curr.next.left; // ye important hai step
    }

    if (curr.left) traverse(curr.left);
    if (curr.right) traverse(curr.right);
  };
  traverse(root);
  return root;
};

console.log(nextRightPointer(root));
