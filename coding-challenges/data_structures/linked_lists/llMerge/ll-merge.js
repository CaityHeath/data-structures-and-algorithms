'use strict';

const LinkedList = require('../linkedList/linked-list');
//const Node = require('./lib/node');


function mergeList(ll1, ll2){
  if(typeof ll1 !== 'object'){
    throw new TypeError('value must be an object');
  }
  
  let current1 = ll1.head;
  let current2 = ll2.head;
  let zipped = new LinkedList();

  while(current1 || current2){
    if(current1){
      zipped.append(current1.value);
      current1 = current1.next; 
    }

    if(current2){
      zipped.append(current2.value);
      current2 = current2.next;
    }
  }
  return zipped.head;
}

module.exports = mergeList;


