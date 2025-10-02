function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

// get the middle element
// yha par basically node ke middle element ko nikalne ke liye fast or slow pointer ka use kiya hai
// slow pointer apne next pointer ko target karta hau
// fast pointer apne next ke next ko target karta hai
// or jab fast wala null ya last elemnet par jata hai to slow pointer jha rukta hai whi middle element hota hai.

function middleElement(head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
