'use strict';

function swap(arr, i , j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, left=0, right=arr.length-1) {
  if (left < right) {
    let pivotidx = pivot(arr, left, right);
    quickSort(arr, left, pivotidx-1);
    quickSort(arr,pivotidx +1, right);
  }
  return arr;
}

function pivot(arr, start=0) {

  let pivot = arr[start];
  let swapIdx = start;

  for(let i = start+1; i < arr.length; i++) {
    if (pivot > arr[i]){
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}



module.exports = quickSort;