'use strict';

function check(node){
  if(node.value % 15 == 0){
    node.value = 'fizzbuzz';
  }else if(node.value % 3 == 0){
    node.value = 'fizz';
  }else if(node.value %  5 == 0){
    node.value = 'buzz';
  }else{ 
    node.value = node.value;
  }
  return node.value;
}

function fizzBuzzTree(tree){
  if(!tree.root){
    return 'error! must be a binary tree input';
  }
  
  check(tree.root);
  let _walk = (n) => {
    if(n.left){
      _walk(n.left);
      check(n.left);
    }
    if(n.right){
      _walk(n.right);
      check(n.right);
    }
  };
  _walk(tree.root);
}

module.exports = fizzBuzzTree;