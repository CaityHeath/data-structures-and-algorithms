'use strict';

require('../linked_lists/linkedList/linked-list');
require('../hashtable/hashtable');
require('../linked_lists/linkedList/lib/node');


function leftJoin(hash1, hash2){
  let container = [];
  for(let i = 0; i < hash1.size; i++){
    if(hash1.keyMap[i]){
      let current = hash1.keyMap[i].head;
      let bucket = [];

      while(current){
        bucket.push(current.value);
        current = current.next;
        if(hash2.contains(bucket[0])){
          bucket.push(hash2.keyMap[i].value);
        } else {
          bucket.push(null);
        }
        container.push(bucket);
      }
    }
  }
  return container;
}

module.exports = leftJoin;