function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

// add value in linkedlist

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

// check Plaindrome

function isPalindrome(head) {
  if (!head || !head.next) return true;
  // step 1 get middle via slow and fast
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // step 2: reverse secons half
  let prev = null;
  let current = slow;

  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  // comapre both half
  let firstStep = head;
  let secondStep = prev;
  while (secondStep) {
    if (firstStep.value != secondStep.value) {
      return false;
    }
    firstStep = firstStep.next;
    secondStep = secondStep.next;
  }
  return true;
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(2);
list.add(1);
console.log(isPalindrome(list.head));

// Note agar humare pass single value hoga to bhi wo palindrome hoga
