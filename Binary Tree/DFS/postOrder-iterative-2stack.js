// Post Order Itertive 2 stacks // left => right => root

// for idea it is like preorder bas last me reverse karna hai

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

const postOrderIterative = (root) => {
  let ans = [];
  let s1 = [root];
  let s2 = [];

  while (s1.length > 0) {
    let curr = s1.pop();
    s2.push(curr);
    if (curr.left) s1.push(curr.left); // isme preorder ki tarah sirf right ki jagah left hai
    if (curr.right) s1.push(curr.right);
  }
  // yha par reverse kar diya hai s2 ka
  while (s2.length > 0) {
    ans.push(s2.pop().val);
  }

  return ans;
};

console.log(postOrderIterative(root));
