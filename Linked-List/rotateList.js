function Node(value) {
  this.value = value;
  this.next = null;
}

function Linkedlist() {
  this.head = null;
  this.size = 0;
}

// add elements
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

// Rotate List
function rotateList(head, k) {
  if (!head || !head.next) return head;
  let slow = head;
  let length = 1;

  while (slow.next) {
    slow = slow.next;
    length++;
  }

  slow.next = head;

  let newHead = head;
  let stepToHead = length - k;

  for (let i = 1; i < stepToHead; i++) {
    newHead = newHead.next;
  }
  let newList = newHead.next;
  newHead.next = null;

  return newList;
}

let list = new Linkedlist();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(6);

console.log(rotateList(list.head, 2));
