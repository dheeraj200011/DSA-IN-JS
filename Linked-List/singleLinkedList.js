// create singly linked list via function

// basic boilerplate to create node
function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

// Add New Node

function AddHeadNode(value) {
  // add new node with value
  let newMode = new Node(value);
  // isme head number ko newnode ka next value me assogn karenge
  newMode.next = this.head;
  // ab newnode ko head me rakhenge
  this.head = newMode;
  // or number of nodes ko increase karenge
  this.size++;
}

function AddTailNode(value) {
  // create a ne Node
  let newNode = new Node(value);
  // check for head agar nhi hai to newmode hi head hoga
  if (!this.head) {
    this.head = newNode;
  } else {
    // head ko select karenge
    let current = this.head;
    // or last tak jana hoga
    while (current.next) {
      current = current.next;
    }
    // or new node ko last me jod dena hai
    current.next = newNode;
  }
  this.size++;
}

function AddNodeToIndex(index, value) {
  let newNode = new Node(value);

  if (index == 0) {
    this.AddHeadNode(value);
  } else if (index === this.size) {
    this.AddTailNode(value);
  } else {
    // loop karne ke liye head ko select karna hoga
    let current = this.head;
    // phir hum loop chlayenge
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }
}

// get an element

function getValueViaIndex(index) {
  if (index < 0 || index >= this.size) {
    return -1;
  } else {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.value;
  }
}

// delete an element

function deleteNodeViaIndex(index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  if (index == 0) {
    this.head = this.head.next;
  }
  let current = this.head;
  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }
  current.next = current.next.next;
  this.size--;
}
