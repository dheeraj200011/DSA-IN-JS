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

class TreeNode2 {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root2 = new TreeNode2(1);
root2.left = new TreeNode2(2);
root2.right = new TreeNode2(3);

const sameTree = (p, q) => {
  // dono null → same
  if (!p && !q) return true;

  // ek null, ek non-null → not same
  if (!p || !q) return false;

  // value mismatch
  if (p.val !== q.val) return false;

  // left & right subtree check
  return sameTree(p.left, q.left) && sameTree(p.right, q.right);
};

console.log(sameTree(root, root2));
