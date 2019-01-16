'use strict';

const Node = require('../node.js');
const Queue = require('../../stacks_and_queues/stacksAndQueues/stacks_and_queues.js');

class BinaryTree{
  constructor(){
    this.root = null;
  }

  preOrder(){
    let nodes = [];
    let _walk = (node) => {
      nodes.push(node.value);
      if(node.left){_walk(node.left);}
      if(node.right){_walk(node.right);}
    };
    _walk(this.root);
    return nodes;
  }

  inOrder(){
    let nodes = [];
    let _walk = (node) => {
      if(node.left){_walk(node.left);}
      nodes.push(node.value);
      if(node.right){_walk(node.right);}
    };
    _walk(this.root);
    return nodes;
  }

  postOrder(){
    let nodes = [];
    let _walk = (node) => {
      if(node.left){_walk(node.left);}
      if(node.right){_walk(node.right);}
      nodes.push(node.value);
    };
    _walk(this.root);
    return nodes;
  }

  breadthFirst(tree){
    let data = new Queue.Queue();
    let treeQ = new Queue.Queue();

    data.enqueue(tree.root);

    while(data.length){
      let temp = data.dequeue();
      if(temp.left){ data.enqueue(temp.left); }
      if(temp.right){ data.enqueue(temp.right); }

      treeQ.enqueue(temp);
    }

    while(treeQ.length){
      console.log(treeQ.dequeue());
    }
    return;
  }
}



module.exports = BinaryTree;