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
module.exports = Stack;