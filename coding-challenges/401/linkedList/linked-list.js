'use strict';

const Node = require('./lib/node.js');

class LinkedList{
  constructor(){
    this.head = null;
  }

  append(value){
    if(typeof value !== 'number'){
      throw new TypeError('value must be a number');
    }
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

  insertBefore(value, newValue){
    if(typeof newValue !== 'number'){
      throw new TypeError('value must be a number');
    }

    if(!this.head){
      this.head = new Node(newValue);
      return;
    }

    let current = this.head;

    while(current.next.value !== value){
      current = current.next;
    }
    let node = new Node(newValue);
    node.next = current.next;
    current.next = node;
  }

  insertAfter(value, newValue){
    if(typeof newValue !== 'number'){
      throw new TypeError('value must be a number');
    }
    
    if(!this.head){
      this.head = new Node(newValue);
      return;
    }

    let current = this.head;

    while(current.value !== value){
      current= current.next;
    }
    let node = new Node(newValue);
    node.next = current.next;
    current.next = node;
  }


  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node; 
  }

  includes(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      } else if(current === null){
        return false;
      }
      current = current.next;
    }
  }
}

module.exports = LinkedList;