// Symmetric Tree iterative way

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

const symTree = (root) => {
  let queue = [root.left, root.right];

  while (queue.length > 0) {
    let p1 = queue.shift();
    let p2 = queue.shift();

    // dono null → continue
    if (!p1 && !p2) continue;

    // ek null, ek non-null → not symmetric
    if (!p1 || !p2) return false;

    if (p1.val !== p2.val) {
      return false;
    }
    queue.push(p1.left, p2.right);
    queue.push(p1.right, p2.left);
  }
  return true;
};

console.log(symTree(root));
