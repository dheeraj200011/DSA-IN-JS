// Preorder Traversal - Iterative Approach
// root => left => right

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

const preOrderIterartive = (root) => {
  if (!root) return;
  let stack = [root];
  let ans = [];

  while (stack.length > 0) {
    let curr = stack.pop();
    ans.push(curr.val);
    if (curr.right) stack.push(curr.right); // isme hum right ko rakh rhe hai phle taki left wala hi stack se out hoga or ans me push hoga
    if (curr.right) stack.push(curr.left);
  }

  return ans;
};

console.log(preOrderIterartive(root));
