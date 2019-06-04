'use strict';

function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;
  let sum;

  while(left < right){
     sum = arr[left] + arr[right];
     if(sum === 0){return [arr[left], arr[right]]}
     if(sum < 0){ left++ }
     if(sum > 0){ right-- }
  }

}


describe('sumZero will return the values of a sorted array that sum to zero.', () => {
  it('will return undefined', () => {
    expect(sumZero([-1,0, 3, 5])).toBeUndefined();
  });

  it('will return true', () => {
    expect(sumZero([-1, 0, 1, 5])).toEqual([-1, 1]);
  });
})
