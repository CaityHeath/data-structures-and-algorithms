'use strict';
const Node = require('../node.js');
const BinaryTree = require('./tree.js'); 

describe('preOrder()', ()=>{
  it('orders the nodes by when it they are first touched by the traversal.', () => {
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
    
    expect(tree.preOrder()).toEqual(['D', 'B', 'A', 'C', 'E', 'F']);
  }); 
  it('it doesnt care what the nodes value type is', () => {
    let tree = new BinaryTree();
    let a = new Node('A');
    let b = new Node(1);
    let c = new Node('C');
    let d = new Node(4);
    let e = new Node('E');
    let f = new Node (6);
    tree.root = d;
    d.left = b;
    d.right = e;
    b.right = c;
    b.left = a;
    e.right = f;
  
    expect(tree.preOrder()).toEqual([4, 1, 'A', 'C', 'E', 6]);
  });
});

describe('inOrder()', ()=>{
  it('orders the nodes by when the traversal first hits them on their left side', () => {
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
      
    expect(tree.inOrder()).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  }); 
  it('it doesnt care what the nodes value type is', () => {
    let tree = new BinaryTree();
    let a = new Node('A');
    let b = new Node(1);
    let c = new Node('C');
    let d = new Node(4);
    let e = new Node('E');
    let f = new Node (6);
    tree.root = d;
    d.left = b;
    d.right = e;
    b.right = c;
    b.left = a;
    e.right = f;
    
    expect(tree.inOrder()).toEqual(['A', 1, 'C', 4, 'E', 6]);
  });
});


describe('postOrder()', ()=>{
  it('orders the nodes by when the traversal last visits them on their left', () => {
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
      
    expect(tree.postOrder()).toEqual(['A', 'C', 'B', 'F', 'E', 'D']);
  }); 
  it('it doesnt care what the nodes value type is', () => {
    let tree = new BinaryTree();
    let a = new Node('A');
    let b = new Node(1);
    let c = new Node('C');
    let d = new Node(4);
    let e = new Node('E');
    let f = new Node (6);
    tree.root = d;
    d.left = b;
    d.right = e;
    b.right = c;
    b.left = a;
    e.right = f;
    
    expect(tree.postOrder()).toEqual(['A', 'C', 1, 6, 'E', 4]);
  });
});

describe('bredthFirst(tree)', () => {
  it('Returns undefined ', () => {
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

    expect(tree.breadthFirst(tree)).toBeUndefined();
  });

  it('Returns undefined even when the tree is empty', () => {
    let tree = new BinaryTree();

    expect(tree.breadthFirst(tree)).toBeUndefined();
  });
});