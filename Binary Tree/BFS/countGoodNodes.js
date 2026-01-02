// couint good nodes

// isme hum top se traverse karenge
// or curr value ko  curr value ki prev value se compare karenge
// agar curr value prev value se badi hai to count increase hoga nhi to left right travserse hoga

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.left = new TreeNode(3);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(5);

const goodNodes = (root) => {
  if (!root) return 0;

  let goodNodeCount = 0;
  let queue = [[root, root.val]];

  while (queue.length) {
    let [node, maxSeen] = queue.shift();

    if (node.val >= maxSeen) {
      goodNodeCount++;
      maxSeen = node.val;
    }

    // ye jab bhi dovalue se comapre karna ho
    if (node.left) queue.push([node.left, maxSeen]);
    if (node.right) queue.push([node.right, maxSeen]);
  }

  return goodNodeCount;
};

console.log(goodNodes(root));
