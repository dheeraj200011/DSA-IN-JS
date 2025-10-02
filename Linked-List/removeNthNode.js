// example : [1,2,3,4,5,6] n = 2
// output: [[1,2,3,4,6] // last index jo n ki value hai wo remove hoga

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

// remove nth elemnts

function removeNthElements(head, n) {
  let sentinal = new Node(0);
  sentinal.next = head;
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }
  let prevPos = length - n;
  let prev = sentinal;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinal.next;
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(6);

console.log(removeNthElements(list.head, 2));
