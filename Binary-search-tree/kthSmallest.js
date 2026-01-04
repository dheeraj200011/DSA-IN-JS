// kth samllest elemenet
// first we do inorder traversal
// and loop with k number

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

const kthSmallest = (root, k) => {
  let smallest = 0;
  if (!root) return 0;

  let arr = Inorder(root);

  for (let i = 0; i < k; i++) {
    smallest = arr[i];
  }
  return smallest;
};

function Inorder(root) {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    ans.push(curr.val);
    traversal(curr.right);
  }

  traversal(root);
  return ans;
}

console.log(kthSmallest(root, 2));
