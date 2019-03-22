'use strict';

let BinaryTree = require('./tree.js');
let Node = require('../node.js');


function sumOfLeaves(g){
  let result = [];
  let _walk = (node) => {
    if(node.left){ _walk(node.left); }
    if(node.right){_walk(node.right); }
    if(!node.right && !node.left){ result.push(node.value); }
  };

  _walk(g.root);

  let sum = 0;
  for(let i = 0; i < result.length; i++){
    sum = result[i] + sum;
  }

  return sum;
}

function deleteLeaves(g){
  let _walk = (node) => {
    if(node.left){_walk(node.left); }
    if(node.right){ _walk(node.right); }
    if(!node.right && !node.left){node.value = null; }
  }; 
  _walk(g.root);
  return;
}




function checkBST(g){
  let result = [];

  let _walk = (node) => {
    if(node.left){_walk(node.left); }
    result.push(node.value);
    if(node.right){_walk(node.right); }
  };

  _walk(g.root);

  for(let i = 0; i < result.length; i++){
    if(result[i] < result[i - 1]){
      return false;
    }
  }
  return true;
}




let tree = new BinaryTree();
let a = new Node(8);
let b = new Node(10);
let c = new Node(11);
let d = new Node(12);
let e = new Node(20);
let f = new Node(25);


tree.root = d;
d.left = b;
d.right = e;
b.right = c;
b.left = a;
e.right = f;

console.log(sumOfLeaves(tree));
console.log(checkBST(tree));