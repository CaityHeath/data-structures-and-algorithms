'use strict';

let radixSort = require('./radix-sort.js');

describe('radix Sort', () => {
  it('correctly solves the happy path', () => {
    let expected = radixSort([5,3,4,6,1,7]);
    expect(expected).toEqual([1,3,4,5,6,7]);
  });
  
});