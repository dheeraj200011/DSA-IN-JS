// binary tree
// ye basically isme ek root or two child hote hai

// preOrder
// hum isme DFS ka use karenge (Direct-first search)

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right - null;
  }
}

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

const preOrder = (root) => {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;
    ans.push(curr.val);
    traversal(curr.left);
    traversal(curr.right);
  }

  traversal(root);
  return ans;
};

console.log(preOrder(root));
