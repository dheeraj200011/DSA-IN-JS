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

// swap items

function swapList(head) {
  let dummy = new Node(0);
  dummy.next = head;
  let prev = dummy;

  while (head.next) {
    let first = head;
    let second = head.next;

    // swap
    prev.next = second;
    first.next = second.next;
    second.next = first;

    // move pointers

    prev = first;
    head = first.next;
  }
  return dummy.next;
}

let list = new Linkedlist();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

console.log(swapList(list.head));
