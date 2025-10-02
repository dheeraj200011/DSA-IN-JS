function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

// reverse the singly linked list\

function reverseList(head) {
  let prev = null; // ye start null ko target karega
  let current = head; // ye 1st element ko target karega
  let temp; // temp me hum apne next node ko taeget katenge

  while (current != null) {
    temp = current.next; // next ko traget hoga
    current.next = prev; // isme temp ke prev value store hogi
    prev = current; // prev to current hoga
    current = temp; // or current ko hum temp me rakenhenge or loop jab change to hat temp me uski next value store hogi
  }
  return prev;
}
