'use strict';

const Node = require('../node.js');


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
}



module.exports = {BinaryTree};