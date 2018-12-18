'use strict';

let shift = module.exports = {};


shift.insertShiftArray = function(arr, val){
  if(!Array.isArray(arr)){ return null; }
  let newArr = [];
  let centerIdx = Math.ceil(arr.length/2);

  for(let i = 0; i < centerIdx; i++){
    newArr[i] = arr[i];
  }

  newArr[centerIdx] = val;

  for(let i = centerIdx + 1; i <= arr.length; i++){
    newArr[i] = arr[i -1];
  }

  return newArr;
};

