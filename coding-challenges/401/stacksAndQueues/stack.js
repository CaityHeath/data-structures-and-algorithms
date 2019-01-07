'use strict';

class Stack {
  constructor(){
    this.stack = new Array();
    this.top = null;
  }

  peek(){
    return this.top;
  }

  push(value){
    this.stack.push(value);
    this.top = value;
  }

  pop(){
    let value = this.stack.pop();
    this.top = this.stack[0];
    return value;
    
  }

}

module.exports = Stack;