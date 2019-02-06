'use strict';

let treeIntersection = require('./tree-intersection.js');
let BinaryTree = require('../../trees/tree/tree.js');
let Node = require('../../trees/node');

describe("tree intersection function", () => {
it("returns an array with length if a value exists in both trees", () => {
  let tree1 = new BinaryTree();
  let a = new Node('A');
  let b = new Node('B');
  let c = new Node('C');
  let d = new Node('D');
  let e = new Node('E');
  let f = new Node ('F');
  tree1.root = d;
  d.left = b;
  d.right = e;
  b.right = c;
  b.left = a;
  e.right = f;


  let tree2 = new BinaryTree();
  let g = new Node('C');
  let h = new Node('F');
  let i = new Node('Z');
  let j = new Node('D');
  let k = new Node('X');
  let l = new Node ('F');
  tree2.root = g;
  g.left = h;
  g.right = k;
  h.right = i;
  k.left = j;
  j.right = l;
  let returnedArr = treeIntersection(tree1, tree2);


  expect(returnedArr.length).toBeTruthy();  
});

it("returns an array of 0 length if there are no shared values in the two trees", () => {
  let tree1 = new BinaryTree();
  let a = new Node('A');
  let b = new Node('B');
  let c = new Node('C');
  let d = new Node('D');
  let e = new Node('E');
  let f = new Node ('F');
  tree1.root = d;
  d.left = b;
  d.right = e;
  b.right = c;
  b.left = a;
  e.right = f;


  let tree2 = new BinaryTree();
  let g = new Node('G');
  let h = new Node('H');
  let i = new Node('I');
  let j = new Node('J');
  let k = new Node('K');
  let l = new Node ('L');
  tree2.root = g;
  g.left = h;
  g.right = k;
  h.right = i;
  k.left = j;
  j.right = l;
  let returnedArr = treeIntersection(tree1, tree2);

  expect(returnedArr.length).toBeFalsy();  
});




});