let Node = require('./node.js');

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  
  append(value){
    if(!this.head){
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = new Node(value);
  }

  insertBefore(target, value){
    if(!this.head){
      this.head = new Node(value);
      return;
    }

    let current = this.head;

    while(current.next.value !== target){
      current = current.next;
    }
    let node = new Node(value);
    node.next = current.next;
    current.next = node;
    return
  }

  insertAfter(target, value){
    if(!this.head){
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while(current.value !== target){
      current = current.next;
    }
    let node = new Node(value);
    node.next = current.next;
    current.next = node;
    return 
  }

  includes(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
    }
  }


module.exports = LinkedList;