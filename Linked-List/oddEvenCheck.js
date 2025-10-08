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

// check odd even
function checkevenOdd(head) {
  if (!head && !head.next) return;
  let odd = head;
  let even = head.next;
  let evenStart = odd.next;
  while (even.next && odd.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenStart;
  return head;
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(3);
list.add(6);

console.log(removeDuplicates(list.head));
