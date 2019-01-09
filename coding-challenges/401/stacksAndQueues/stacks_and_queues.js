'use strict';

let Node = require('./node.js');


class Stack {
  constructor(){ 
    this.top = null;
    this.next = null; 
    this.length = 0;
  }

  push(value){
    if(typeof value !== 'number'){
      throw new TypeError('value must be a number');
    }
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
    console.log(node);
  }

  pop(){
    let temp = this.top;
    this.top = this.top.next;
    temp = null;
    this.length--;
  }

  peek(){
    return this.top.value;
  }
}


class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
    this.next = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    }
    else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  
  dequeue() {
    if (!this.front) {
      return false;
    }
    else {
      let dequeuedItem = this.front;
      this.front = dequeuedItem.next;
      dequeuedItem.next = null;
      return dequeuedItem;
    }
  }

  

  peek() {
    if (this.front) {
      return this.front;
    }
    else {
      return null;
    }
  }
}

module.exports = {Stack, Queue};
