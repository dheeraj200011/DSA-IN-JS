// remove duplicates from Sorted List

function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

// add elements

LinkedList.prototype.add = function (value) {
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

// remove duplicates in sorted array

function removeDuplicates(head) {
  let sentinal = new Node(0);
  sentinal.next = head;
  let slow = head;
  let fast = head.next;
  while (fast.next) {
    if (slow.value == fast.value) {
      fast = fast.next;
      slow.next = fast;
    } else {
      slow = slow.next;
      fast = fast.next;
    }
  }
  return sentinal.next;
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(3);
list.add(6);

console.log(removeDuplicates(list.head));
