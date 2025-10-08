function Node(value) {
  this.value = value;
  this.next = null;
}

function Linkedlist() {
  this.head = null;
  this.size = 0;
}

// Add elements
Linkedlist.prototype.add = function (value) {
  let newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
};

// Merge two sorted lists
const mergeSortedLists = (l1, l2) => {
  let start = new Node(0);
  let current = start;

  while (l1 && l2) {
    if (l1.value < l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1) current.next = l1;
  if (l2) current.next = l2;

  return start.next;
};

// Add values
let list1 = new Linkedlist();
let list2 = new Linkedlist();

list1.add(1);
list1.add(3);
list1.add(5);

list2.add(2);
list2.add(4);
list2.add(6);

// Print helper
function printList(node) {
  let result = "";
  while (node) {
    result += node.value + " -> ";
    node = node.next;
  }
  console.log(result + "null");
}

// Print result
let result = mergeSortedLists(list1.head, list2.head);
printList(result);
