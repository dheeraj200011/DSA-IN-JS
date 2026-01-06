// heaps introduction
// heaps complete binary tree follow karte ahai

// Key Rules Yaad Rakho

// Agar right child hai to left child hona hi chahiye

// Last level me nodes sirf left side se bhar sakte hain

// Level order traversal me null beech me nahi aana chahiye

// trur case

//     1
//    / \
//   2   3
//  / \  /
// 4  5 6

// ✔ Last level left se fill ho raha hai
// ✔ Beech me koi missing node nahi

//         1
//        / \
//       2   3
//        \
//         5

// ❌ Left child missing, right child present → gap ban gaya

// min heap

// iska parent(root) chota hoga child node se

// max heap

// iska parent bada hoga child nodes se
