'use strict';

const LinkedList = require('../linked-list.js');

describe('testing LinkedList', () => {
  it('append(value) should append a value to an empty linked list', () => {
    let list = new LinkedList();
    list.append(1);

    expect(list.head.value).toEqual(1);
    
  });
  
  it('append(value) should throw a Type Error if value is not a number', () => {
    let list = new LinkedList();

    expect(() => {
      list.append('mabel');
    }).toThrow();
  });


  it('append(value) should append a value to a Linked List that is not empty', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next).toBeNull();
  });


  it('insertBefore(value, newValue) should throw a Type Error if newValue is not a number', () => {
    let list = new LinkedList();
    list.insertBefore('mabel', 6);

    expect(() => {
      list.insertBefore('mabel');
    }).toThrow();
  });


  it('insertBefore(value, newValue) should prepend a value to the node that is referenced by the argument value', () => { 
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertBefore(3,5);
   

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(5);
    expect(list.head.next.next.next.value).toEqual(3);
    expect(list.head.next.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next.next).toBeNull();
  });

  it('insertBefore(value, newValue) should create a head node if the linked list is empty', () => {
    let list = new LinkedList();
    list.insertBefore(0, 5);
    console.log(list);

    expect(list.head.value).toEqual(5);
  });


  it('insertAfter(value, newValue) should throw a Type Error if newValue is not a number', () => {
    let list = new LinkedList();
    list.insertAfter('mabel', 6);

    expect(() => {
      list.insertAfter('mabel');
    }).toThrow();
  });

  it('insertAfter(value, newValue) should prepend a value to the node that is referenced by the argument value', () => { 
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertAfter(3,5);
    console.log(list);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(5);
    expect(list.head.next.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next.next).toBeNull();
  });

  it('insertAfter(value, newValue) should create a head node if the linked list is empty', () => {
    let list = new LinkedList();
    list.insertAfter(0, 5);
    expect(list.head.value).toEqual(5);
  });

  it('insert(value) should add a node to the front of an empty Linked List', () => {
    let list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });
  it('insert(value) should add a node to the front of a Linked List that is not empty', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);


    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next).toBeNull();
  });

  it('includes(value) should return a boolean result depending on whether the input value exists as a Nodes value', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    
    expect(list.includes(1)).toEqual(true);
    expect(list.includes(2)).toEqual(true);
  });

  it('includes(value) should return false if it is not a value in the LinkedList', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    
    expect(list.includes(3)).toBeUndefined();
  });

  it('kFromEnd(k) should return the value of the node that is k from the end.', () => {
    let list = new LinkedList();
    list.append(5);
    list.append(3);
    list.append(7);
    list.append(9);
    list.append(2);
    list.append(8);
    list.kFromEnd(2);

    expect(list.kFromEnd(2)).toEqual(9);
     
  });

  it('kFromEnd(k) should return k is too big if k is greater than the length of the list', () => {
    let list = new LinkedList();
    list.append(5);
    list.append(3);
    list.append(7);
    list.append(9);
    list.append(2);
    list.append(8);
    list.kFromEnd(9);

    expect(list.kFromEnd(9)).toEqual('k is too big!');
  });

  it('kFromEnd(k) should return k must be a number if the value of k is not numerical', () => {
    let list = new LinkedList();
    list.append(5);
    list.append(3);
    list.append(7);
    list.append(9);
    list.append(2);
    list.append(8);
    
    expect(() => {
      list.kFromEnd('cat');
    }).toThrow();
  });
});

