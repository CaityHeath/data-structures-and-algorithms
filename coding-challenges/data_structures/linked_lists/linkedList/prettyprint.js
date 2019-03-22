'use strict';

let LinkedList = require('./linked-list');

function prettyPrint(ll){
  let current = ll.head;

  let _walk = (node) => {
    if(node){
      console.log(node.value);
      _walk(node.next); 
    }
  };
  _walk(current);
  return;
}

/* write a function called contains(list, value) that returns the first node in a linked list that conains a value or null if not found
*/

function contains(ll, value){
  let current = ll.head;

  while(current.next){
    if(current.value === value){
      return current;
    }
    current = current.next;
  }

  return null;
}


function duplicates(ll){
  let current = ll.head;
  let dup = new Set();

  while(current.next){

    
    if(dup.has(current.value)){
      if(current.next.next){
        current.next = current.next.next;
      }else{current.next = null;}
    } else{ dup.add(current.value); }
    current = current.next;
  }

  return current;
}

let list = new LinkedList();
list.append(1);
list.append(1);
list.append(1);
list.append(4);
list.append(3);
list.append(1);


//prettyPrint(list);
//console.log(contains(list, 1));
console.log(duplicates(list));