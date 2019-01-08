let Stack = require('../stacksAndQueues/stacks_and_queues.js');

class PseudoQueue {
  constructor(){
    let s1 = new Stack();
    let s2 = new Stack();
  }

  enqueue(value){
    if(s1.length === 0 && s2.length === 0){
      s1.push(value);
    }
    else if(s1.length > 0){
      s2.push(value);
    }
  }

  dequeue(){
    if(s1.length >= 1 ){
      s1.pop();
    }
    else if(s1.length === 0 && s2.length > 0){
      while(s2.length !== 0){
        s1.push(s2.top);
        s2.pop();
      }
    }
    s1.pop();
  }
}

module.exports = PseudoQueue;