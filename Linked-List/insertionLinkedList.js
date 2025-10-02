function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

// add common list

let common = new Node(7);
common.next = new Node(8);

// add head A
let headA = new Node(1);
headA.next = new Node(2);
headA.next.next = new Node(3);
headA.next.next.next = common;

// add headB

let headB = new Node(4);
headB.next = new Node(5);
headB.next.next = new Node(6);
headB.next.next.next = common;

// get the insertion point

function getIntersectionPoint(headA, headB) {
  let currentA = headA;
  let seenNodes = new Set();
  while (currentA) {
    seenNodes.add(currentA);
    currentA = currentA.next;
  }

  // add haed b
  let currentB = headB;
  while (currentB) {
    if (seenNodes.has(currentB)) {
      return currentB;
    } else {
      currentB = currentB.next;
    }
  }
  return null;
}

let intersection = getIntersectionPoint(headA, headB);
if (intersection) {
  console.log("Intersection at node with value:", intersection.value);
} else {
  console.log("No intersection found");
}

console.log(getIntersectionPoint(headA, headB));
