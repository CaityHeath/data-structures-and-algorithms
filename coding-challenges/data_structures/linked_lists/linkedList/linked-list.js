'use strict';

const Node = require('./lib/node.js');

class LinkedList{
  constructor(){
    this.head = null;
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

  kFromEnd(k){
    if(typeof k !== 'number'){
      throw new TypeError('k must be a number');
    }

    let cnt = 1;
    let current = this.head;

    while(current.next){
      current = current.next;
      cnt++;
    }
    let kpos = cnt - k;
    if(kpos < 0){
      return 'k is too big!';
    }
    cnt = 1;
    current = this.head;
    while(cnt < kpos){
      current = current.next;
      cnt++;
    }
    return current.value;
  }

  deleteFromMiddle(){
    let cnt = 0;
    let current = this.head;

    while(current.next){
      current = current.next;
      cnt++;
    }

    let mid = Math.floor(cnt/2);
    let pos = this.head;
    let previous;

    while(mid){
      previous = pos;
      pos = pos.next;

      mid--;
    }
    pos.next = null;
    previous.next = previous.next.next;
    return this;
  }

  reverse(){
    let next = null;
    let prev = null;
    let current = this.head;
    console.log('inside reverse');
    while(current){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this.head = prev;
  }
  

}

module.exports = LinkedList;