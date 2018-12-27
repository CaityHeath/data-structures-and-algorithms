'use strict';

const search = require('./array-binary-search.js');

let x = [5,10,15,20,25,30,35,40,45,50,55,60];


describe('binary search module', () => {
  it('returns the index of which the key is at', () => {
    expect(search.binarySearch(x, 55)).toEqual(10);
  });

  it('returns -1 if the key is not in the array', () =>{
    expect(search.binarySearch(x,72)).toEqual(-1);
  });

  it('Type checks the input array, returns null if it is not an array', () => {
    expect(search.binarySearch(2, 5)).toEqual(null);
  });
});