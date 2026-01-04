// search in bst

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

const searchBST = (root, val) => {
  if (!root) return [];

  function traversal(curr) {
    if (!curr) return null;
    if (curr.val === val) {
      return curr;
    } else if (curr.val > val) {
      return traversal(curr.left);
    } else if (curr.val < val) {
      return traversal(curr.right);
    } else {
      return;
    }
  }

  return traversal(root);
};

console.log(searchBST(root, 2));
