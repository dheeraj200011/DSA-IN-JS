// subtree of another tree
// isko hum string me convert karke
// hash me convert karenge
// jaise koi nhi node jime left ya right nhi hai wha nhum # laga denge phir node or hast jha match honge tab trur hoga nhi to false hoga
// isme hum KMP ka use karenge
// isme hum same values ko check karne ke liye like 2 or 2 other is 22 boyh like same so we have to put extra dash after each node

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(2);

let subroot = new TreeNode(4);
subroot.left = new TreeNode(1);
subroot.right = new TreeNode(2);

const isSubtree = (root, subroot) => {
  let hashroot = serialize(root);
  let subHashRoot = serialize(subroot);

  return hashroot.includes(subHashRoot);
  // yha patr kmp lagao agar inbuilt nhi lage to
};

let serialize = function (root) {
  let hash = "";

  function traversal(curr) {
    if (!curr) {
      hash = hash + "-#";
      return;
    }
    hash = hash + "-" + curr.val;
    traversal(curr.left);
    traversal(curr.right);
  }

  traversal(root);
  return hash;
};

console.log(isSubtree(root, subroot));
