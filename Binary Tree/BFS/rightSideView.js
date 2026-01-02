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
root.left.left = new TreeNode(4);
root.left.left.left = new TreeNode(5);

const rightSideView = (root) => {
  if (!root) return null;
  let queue = [root];
  let ans = [];

  while (queue.length > 0) {
    let levelSize = queue.length; // yha level size 2 hai [3,2]

    for (let i = 0; i < levelSize; i++) {
      // [3,2] me loop kiya
      let curr = queue.shift();

      // i = 0 ye right wala hai isse ji push karenge
      if (i === 0) {
        ans.push(curr.val);
      }
    }

    if (curr.right) queue.push(curr.right); // yha i =0 me right wala hai
    if (curr.left) queue.push(curr.left); // yha i = 1 left wala hai // yha se [3,2] bna hai
  }

  return ans;
};

console.log(rightSideView(root));
