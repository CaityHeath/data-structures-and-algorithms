'use strict';

function binarySearch(arr, key){
  let mid = arr.length/2;
  let cnt = 0;
  let limit = mid;
  let start = 0;
  let end = arr.length

  while(cnt <= limit && arr[mid] !== key){
    
    if(key > arr[mid]){
      start = mid;
      end = end;
      mid = ((end - start)/2) + mid;

    } else if(key < arr[mid]){
      start = start;
      end = mid;
      mid = mid - ((end - start)/2);
    }

    cnt++;
  }
 
  let result;
  if(cnt === limit){
    result = -1;
  } else {
    result = arr[mid];
  }
  return result;
}