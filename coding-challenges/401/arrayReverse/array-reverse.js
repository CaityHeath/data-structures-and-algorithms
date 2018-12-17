'use strict'

function arrayReverse(arr){
  let newArr = [];
  let idx = 0;

  for(let i = arr.length - 1; i >= 0; i--){
    newArr[idx] = arr[i];
    idx++;
  }
  return newArr;
}

let testArr = [98, 13, 24, 56];
console.log(arrayReverse(testArr));
