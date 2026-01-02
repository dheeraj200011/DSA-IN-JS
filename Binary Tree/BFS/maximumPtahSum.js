class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

const maxPathSum = (root) => {
  if (!root) return 0;
  let ans = -Infinity;

  function traverse(curr) {
    if (!curr) return 0;
    // ye process zero ko ignore karta hai
    let left = Math.max(0, traverse(curr.left));
    let right = Math.max(0, traverse(curr.right));

    // path that passes through current node
    // isme hum left or right ka sum denge
    ans = Math.max(ans, curr.val + left + right);

    // ye max onse side value hai
    // yha left or right dono me jo bda hoga use cur.val ke sath sum karenge
    return curr.val + Math.max(left, right);
  }

  traverse(root);
  return ans;
};

console.log(maxPathSum(root));
