// level-order traversal iterative bfs using queue
// bfs me queue hi use hoga

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
  if (!root) return;
  let queue = [root];
  let ans = [];

  while (queue.length > 0) {
    let curr = queue.shift();
    ans.push(curr.val);

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return ans;
};

console.log(levelOrder(root));
