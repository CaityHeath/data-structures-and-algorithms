let LinkedList = require('../jan7/linkedlist');

describe('testing append method', () => {

  it('append(value) should append a value to an empty linked list', () => {
    let list = new LinkedList();
    list.append(1);

    expect(list.head.value).toEqual(1);
  });
  it('append(value) should append a value to a linked list with 3 nodes', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(4);
  });
});

describe('testing insertBefore method', () => {

  it('insertBefore(target, value) should insert a value before a defined target node', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(4);
    list.insertBefore(4, 3);
    
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(4);
  });
  it('insertBefore(target, value) should insert a value at the head of the list if there isnt an existing head', () => {
    let list = new LinkedList();
    list.insertBefore(1,2);

    expect(list.head.value).toEqual(2);

  });
})

describe('testig insertAfter method', () => {

  it('insertAfter(target, value) should insert a value after a defined target node', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(4);
    list.insertAfter(1, 2);

    expect(list.head.next.value).toEqual(2);
  });
  it('insertAfter(target, value) should insert a value at the head of the list if there isnt an existing head node', () => {
    let list = new LinkedList();
    list.insertAfter(1,2);

    expect(list.head.value).toEqual(2);
  });
})

describe('testing includes method', () => {
  it('includes(value) returns true if the list contains a node with the value passed', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.includes(2)).toEqual(true);
  });
  it('includes(value) returns false if the list doesnt contain a node with the value passed', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.includes(5)).toEqual(false);
  })
})

