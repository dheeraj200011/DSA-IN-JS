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

const levelOrder = (root) => {
  let ans = [];

  function traversal(curr, level) {
    if (!curr) return;

    if (!ans[level]) {
      ans[level] = []; // ✅ initialize level
    }

    ans[level].push(curr.val);
    traversal(curr.left, level + 1);
    traversal(curr.right, level + 1);
  }

  traversal(root, 0);
  return ans.flat();
};

console.log(levelOrder(root));
