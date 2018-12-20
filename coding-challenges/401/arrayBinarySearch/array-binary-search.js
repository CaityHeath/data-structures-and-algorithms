'use strict';

let search = module.exports = {};

search.binarySearch = function(arr, key){
  if(!Array.isArray(arr)){return null;}

  let mid = Math.floor(arr.length/2);
  let cnt = 0;
  let limit = mid;
  let start = 0;
  let end = arr.length;

  while(cnt < limit && arr[mid] !== key){
    
    if(key > arr[mid]){
      start = mid;
      mid = Math.floor(((end - start)/2) + mid);

    } else if(key < arr[mid]){
      end = mid;
      mid =Math.floor( mid - ((end - start)/2));
    }

    cnt++;
  }
 
  let result;
  if(cnt === limit){
    result = -1;
  } else {
    result = mid;
  }
  return result;
};

