// Add Two Numbers
function Node(value) {
  this.value = value;
  this.next = null;
}

function Linkedlist1() {
  this.head = null;
  this.size = 0;
}

function Linkedlist2() {
  this.head = null;
  this.size = 0;
}

// add elements
Linkedlist1.prototype.add = function (value) {
  let newNode = new Node(value);
  if (!this.head) {
    // ✅ fixed 'haed' typo
    this.head = newNode;
    return;
  }
  let current = this.head;
  while (current.next) {
    // ✅ should loop till end
    current = current.next;
  }
  current.next = newNode;
};

Linkedlist2.prototype.add = function (value) {
  let newNode = new Node(value);
  if (!this.head) {
    // ✅ fixed 'haed' typo
    this.head = newNode;
    return;
  }
  let current = this.head;
  while (current.next) {
    // ✅ should loop till end
    current = current.next;
  }
  current.next = newNode;
};

// add two numbers
const addTwoNumbers = (l1, l2) => {
  let ans = new Node(0);
  let ansCopy = ans;
  let carry = 0;

  let p = l1.head;
  let q = l2.head;

  while (p || q || carry) {
    let sum = (p ? p.value : 0) + (q ? q.value : 0) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    let newnode = new Node(digit);
    ans.next = newnode;
    ans = ans.next;

    if (p) p = p.next; // ✅ move only if exists
    if (q) q = q.next;
  }
  return ansCopy.next;
};

// add value
let list1 = new Linkedlist1();
let list2 = new Linkedlist2();

list1.add(2);
list1.add(4);
list1.add(3);

list2.add(5);
list2.add(6);
list2.add(4);

// helper to print
function printList(node) {
  let result = "";
  while (node) {
    result += node.value + " -> ";
    node = node.next;
  }
  console.log(result + "null");
}

// print result
let result = addTwoNumbers(list1, list2);
printList(result);
