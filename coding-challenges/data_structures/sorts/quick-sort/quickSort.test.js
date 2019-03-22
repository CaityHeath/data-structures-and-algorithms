'use strict';

let quickSort = require('./quickSort.js');

describe('quickSort', () => {
  it('correctly solves the happy path', () => {
    let expected = quickSort([5,3,4,6,1,7]);
    expect(expected).toEqual([1,3,4,5,6,7]);
  });
  
});