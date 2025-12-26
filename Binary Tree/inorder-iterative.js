// In order Trasversal - Iterative approach // left => root => right

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

const InorderIterative = (root) => {
  if (!root) return;

  let stack = [];
  let ans = [];
  let curr = root;

  while (curr != null || stack.length > 0) {
    while (curr != null) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    ans.push(curr.val);

    curr = curr.right;
  }
  return ans;
};

console.log(InorderIterative(root));
