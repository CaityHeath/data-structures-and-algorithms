'use strict';

const PsuedoQueue = require('../queue-with-stacks');

describe('testing PsuedoQueue Class', () => {
  it('enqueue(value) should add a value to s1.', () => {
    let test = new PsuedoQueue();
    test.enqueue(5);
    
    expect(test.s1.top.value).toEqual(5);
  });

  it('enqueue(value) should add a value to s1 and then begin adding values to s2', () => {
    let test2 = new PsuedoQueue();
    test2.enqueue(5);

 
    expect(test2.s1.length).toEqual(2);
  });

});