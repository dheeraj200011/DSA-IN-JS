// Last common ancestor // very important

// isme bottom se traverse hoga
// curr ki value p or q hui to +1 hoga jab count = 2  hoga jo cuur value lca hogi

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

const lastAncestor = (root, p, q) => {
  if (!root) return null;
  let lca = null;

  function tarverse(curr) {
    let count = 0;
    if (!curr) return 0;
    let ansOnleft = tarverse(curr.left);
    let ansOnRight = tarverse(curr.right);

    if (curr.val === p || curr.val === q) {
      count++;
    }
    count = count + ansOnleft + ansOnRight;

    if (count === 2) {
      lca = curr.val;
    }
    return count; // ye imp hai kyuki iske bina jab dubara function cjhlga to count ka pta hioona chahiye
  }
  tarverse(root);
  return lca;
};

console.log(lastAncestor(root, 5, 1));
