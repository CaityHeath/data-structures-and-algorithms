'use strict';

function findMaxValue(tree){
  if(! tree.root){ return; }
  
  let big = tree.root.value; 

  let _walk = (node) => {
    if(node.left){
      if(node.left.value > big){
        big = node.left.value;
      }
      _walk(node.left);
    }

    if(node.right){
      if(node.right.value > big){
        big = node.right.value;
      }
      _walk(node.right);
    }
  };

  _walk(tree.root);
  return big;
}

module.exports = findMaxValue;