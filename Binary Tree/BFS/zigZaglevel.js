// zig zag level order traversal

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

const zigZag = (root) => {
  if (!root) return;
  let ans = [];
  let queue = [root];
  let level = 0;

  while (queue.length > 0) {
    let levelArr = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      if (level % 2 === 0) {
        levelArr.push(curr.val);
      } else {
        levelArr.unshift(curr.val);
      }

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    ans.push(levelArr);
    level++;
  }
  return ans;
};

console.log(zigZag(root));
