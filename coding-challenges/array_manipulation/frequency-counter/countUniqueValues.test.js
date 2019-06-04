'use strict';
//O(n) time
//(1) space


function countUniqueValues(arr){

  let slow = 0;
  let fast = 1;
  
  while(fast < arr.length){
      if(arr[slow] === arr[fast]){
          fast++;
      }
      if(arr[slow] !== arr[fast]){
          slow++;
          arr[slow] = arr[fast];
      }
  }
  return slow;
}

describe('counts the unique values in a sorted array', () => {
  it('will return 6', () => {
    expect(countUniqueValues([1,1,2,2,3,3,4,4,5,5,6,6])).toEqual(6);
  });

  it('will return 3', () => {
    expect(countUniqueValues([1,1,1,1,1,6,25])).toEqual(3);
  });

  it('will return 0', () => {
    expect(countUniqueValues([])).toEqual(0);
  })
})