// Symmetric Tree

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

const symmetricTree = (root) => {
  if (!root) return true;

  function isMirror(left, right) {
    // both null
    if (!left && !right) return true;

    // one null
    if (!left || !right) return false;

    // value + mirror structure check
    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  }

  return isMirror(root.left, root.right);
};

console.log(symmetricTree(root));
