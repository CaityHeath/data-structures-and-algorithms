'use strict';

let HashMap = require('../hashtable');

function repeatedWords(str){
  if(typeof str !== 'string'){
    throw new TypeError('value must be a number');
  }
  let hash = new HashMap();
  let norm = str.toLowerCase();
  let s = norm.replace(/[.,?!()]/g, '');
  let words = s.split(" ");
  for(let i =0; i < words.length; i++){
    if(hash.contains(words[i])){
      return words[i];
    }else{hash.add(words[i])}
  }
  return "No Repeats";
}

module.exports = repeatedWords;