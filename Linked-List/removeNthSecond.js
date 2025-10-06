// example : [1,2,3,4,5,6] n = 2
// output: [[1,2,3,4,6] // last index jo n ki value hai wo remove hoga
// ye two pass solution hai isme do baar linked list me traverse ho rha hai.

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

// remove nth elemnts via two pointer approach

function removeNthElements(head, n) {
  let sentinal = new Node(0);
  let slow = sentinal;
  let fast = sentinal;
  sentinal.next = head;

  while (fast && fast.next) {
    if (n > 0) {
      fast = fast.next;
      n--;
    } else {
      fast = fast.next;
      slow = slow.next;
    }
  }

  slow.next = slow.next.next;
  return sentinal.next;
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(6);

console.log(removeNthElements(list.head, 2));
