'use strict'; 

let Node = require('../node.js');
let BinaryTree = require('../tree/tree.js');
let fizzBuzzTree = require('./fizz-buzz-tree.js');

describe('testing FizzBuzzTree', () => {
  it('fizzBuzzTree(tree) should change the values of the tree to the fizzbuzz ruleset', () => {
    let tree = new BinaryTree();
    let a = new Node(12);
    let b = new Node(15);
    let c = new Node(3);
    let d = new Node(6);
    let e = new Node(7);
    let f = new Node(20);
    tree.root = a;
    a.left = e;
    a.right = b;
    e.left = d;
    d.left = c;
    b.right = f;
    fizzBuzzTree(tree);

    expect(tree.inOrder()).toEqual(['fizz', 'fizz', 7, 'fizz', 'fizzbuzz', 'buzz']);
  });

  it('fizzBuzzTree(tree) should return a tree that is the same length as the tree argument', () => {
    let tree = new BinaryTree();
    let a = new Node(12);
    let b = new Node(15);
    let c = new Node(3);
    let d = new Node(6);
    let e = new Node(7);
    let f = new Node(20);
    tree.root = a;
    a.left = e;
    a.right = b;
    e.left = d;
    d.left = c;
    b.right = f;
    let len1 = tree.inOrder();
    fizzBuzzTree(tree);
    let len2 = tree.inOrder();

    expect(len1.length).toEqual(len2.length);
  });

  it('will throw a error if input is not a binary tree', ()=> {
    expect(fizzBuzzTree('hi')).toEqual('error! must be a binary tree input');
  });

});