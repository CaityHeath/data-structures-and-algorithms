'use strict';
const Node = require('../node.js');
const BinaryTree = require('./tree.js'); 


let tree = new BinaryTree();
let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');
let f = new Node ('F');

tree.root = d;
d.left = b;
d.right = e;
b.right = c;
b.left = a;
e.right = f;

console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
