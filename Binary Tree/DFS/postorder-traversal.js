// Inorder Traversal

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

const postOrderTraversal = (root) => {
  let ans = [];
  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    traversal(curr.right);
    ans.push(curr.val);
  }

  traversal(root);
  return ans;
};

console.log(postOrderTraversal(root));
