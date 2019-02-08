'use strict';
let repeatedWords = require('./repeatedWords');


describe("repeated words", () => {
  it("should return duck since it is the first word repeated in the given string", () => {
    let astring = 'I am a duck duck goose';
    expect(repeatedWords(astring)).toBe('duck');
  })

  it("should return No Repeats if there aren't any repeated words", () => {
    let astring = 'I do';
    expect(repeatedWords(astring)).toBe('No Repeats');
  })

  it("should throw a TypeError when the input type is not string", () => {
    let notstr = 9;

    expect(() => {
      repeatedWords(notstr);
    }).toThrow();
  });

})