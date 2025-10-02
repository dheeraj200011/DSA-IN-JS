function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

// function listHasCycle(head) {
//   let current = head;
//   let seenNodes = new Set();
//   while (current) {
//     if (!seenNodes.has(current)) {
//       seenNodes.add(current);
//       current = current.next;
//     } else {
//       return true;
//     }
//   }
//   return false;
// }

// using floyd alogorithm
// use slow pointer fast pointer approach

function listCycle(head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (fast != null || fast.next != null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}

// inn dono me time complexity O(n) or space complexity O(n) hoga
