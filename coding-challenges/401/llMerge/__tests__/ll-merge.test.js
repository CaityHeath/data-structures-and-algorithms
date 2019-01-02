'use strict';

const LinkedList = require('../../linkedList/linked-list');
const mergeList = require('../ll-merge');



describe('testing LinkedList', () => {
  it('mergeLists(LL1, LL2) should merge the values of 2 linked lists', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();

    list1.append(1);
    list1.append(3);
    list1.append(2);

    list2.append(5);
    list2.append(9);
    list2.append(4);
   
    let result = mergeList(list1, list2);
    expect(result.value).toEqual(list1.head.value);
  });

  it('mergeLists(LL1, LL2) tests the edge case that the code wont break if the two lists are different sizes.', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
  
    list1.append(1);
   
    list2.append(5);
    list2.append(9);
    list2.append(4);
     
    let result = mergeList(list1, list2);
    console.log(result);
    expect(result.value).toEqual(list1.head.value);
  });

  it('mergeList(ll1,ll2) should throw a Type Error if a parameter value is not a linked list', () => {
    let list2 = new LinkedList();

    list2.append(5);
    list2.append(9);
    list2.append(4);
    expect(() => {
      let result = mergeList('cat', list2);
    }).toThrow();
  });  

});