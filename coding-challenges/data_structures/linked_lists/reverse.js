'use strict';

let LinkedList = require('../linked_lists/linkedList/linked-list.js');
let Node = require('../linked_lists/linkedList/lib/node.js');


function Reverse(ll){
  let next = null;
  let prev = null;
  let current = ll.head;

  while(current){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  console.log(ll);
  return ll;
}

