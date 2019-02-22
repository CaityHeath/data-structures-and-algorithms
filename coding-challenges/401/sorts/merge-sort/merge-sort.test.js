'use strict';

let mergeSort = require('./merge-sort.js');

describe('mergeSort', () => {
  it('correctly solves the happy path', () => {
    let expected = mergeSort([5,3,4,6,1,7]);
    expect(expected).toEqual([1,3,4,5,6,7]);
  });
  
});