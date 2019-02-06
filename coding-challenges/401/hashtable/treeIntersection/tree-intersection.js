'use strict';

const HashMap = require('../hashtable');


function treeIntersection(t1, t2){
  let hashmap = new HashMap();
  let result = [];

  let _walk = (node) => {
    if(!hashmap.contains(node.value)){hashmap.add(node.value);}
    if(node.left){_walk(node.left);}
    if(node.right){_walk(node.right);}
  }

  let _walk2 = (node) => {
    if(hashmap.contains(node.value) && !result.includes(node.value)){
      console.log(true);
      result.push(node.value)
    }
    if(node.left){_walk2(node.left);}
    if(node.right){_walk2(node.right);}
  }

  _walk(t1.root);
  _walk2(t2.root);
  console.log(hashmap);
  console.log(result);
  return result;
}

module.exports = treeIntersection;