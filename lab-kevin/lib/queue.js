const Nd = require('./nd');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(val) {
    //if val is undefined then return null
    if(val === undefined) return null;
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    //if tail is empty set nd as the tail; 
    if(!this.tail) this.tail = nd;
    return this;
  }

  dequeue() {
    //if this.head is undefined, set the new node to the head
    if(!this.head) return this;
    //iterate the link list unto]il you find the end theb remove the node
    for(var node = this.head; node.next; node = node.next);
    node.next = null;
    //set the last item to the tail
    this.tail = node;
  }
  
}
