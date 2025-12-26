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
  let stack = [];
  let ans = [];
  let curr = root;
  let lastVisited = null;

  while (curr !== null || stack.length > 0) {
    // ye logic sirf left nodes ke liye hai
    while (curr != null) {
      stack.push(curr);
      curr = curr.left;
    }
    // ye check karega ki stack me jo last left node hai ke ek value peche jayega
    let peek = stack[stack.length - 1];

    // or agar root ke right me value hai to curr me add ho nhi to ans me push hoga jo bhi value hoga or lastvisited na ho
    if (peek.right !== null && peek.right !== lastVisited) {
      curr = peek.right;
    } else {
      ans.push(peek.val);
      // ye jo last left tha usse pop karga or kisi bhi last stack ka agar koi right node hai usse check hona hoga as peek node
      lastVisited = stack.pop();
    }
  }
  return ans;
};

console.log(postOrderIterative(root));
