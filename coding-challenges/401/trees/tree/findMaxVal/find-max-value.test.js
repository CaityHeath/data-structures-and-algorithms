'use strict';

let BinaryTree = require('../tree.js');
let findMaxValue = require('./find-max-value.js');
let Node = require('../../node.js');

describe('findMaxValue(tree)', () => {

  it( 'should return the value of the largest leaf in the tree using an in order traversal.', ()=> {
    let tree = new BinaryTree();
    let a = new Node(1);
    let b = new Node(2);
    let c = new Node(3);
    let d = new Node(4);
    let e = new Node(4);
    let f = new Node(5);
    tree.root = d;
    d.left = b;
    d.right = e;
    b.right = c;
    b.left = a;
    e.right = f;
    expect(findMaxValue(tree)).toEqual(5);

  });
});

describe('findMaxValue(tree)', () => {

  it( 'An empty tree is passed as a parameter, the function will return undefined', ()=> {
    let tree = new BinaryTree();
    expect(findMaxValue(tree)).toBeUndefined();

  });
});

describe('findMaxValue(tree)', () => {

  it( 'Should return the value of the largest leaf even when evaluating all negative leaf values ', ()=> {
    let tree = new BinaryTree();
    let a = new Node(-24);
    let b = new Node(-5);
    let c = new Node(-59);
    let d = new Node(-2);
    let e = new Node(-6);
    let f = new Node(-8);
    tree.root = d;
    d.left = b;
    d.right = e;
    b.right = c;
    b.left = a;
    e.right = f;

    expect(findMaxValue(tree)).toEqual(-2);

  });
});