'use strict';

function validAnagram(str1, str2){
  if(str1.length !== str2.length){
      return false;
  }
  
  let obj1 = {};
  let obj2 = {};
  
  for(let i = 0; i < str1.length; i++){
      obj1[str1[i]] ? obj1[str1[i]] += 1 : obj1[str1[i]] = 1; 
      obj2[str2[i]] ? obj2[str2[i]] += 1 : obj2[str2[i]] = 1;
  }

  for(let key in obj1){ 
    if(obj1[key] !== obj2[key])
    return false;
  }

  return true;
}

describe('should return true if the anagram is valid', () => {
  it('will return false', () => {
    let str1 = 'hat';
    let str2 = 'bat';

    expect(validAnagram(str1, str2)).toEqual(false);
  });

  it('will return true', () => {
    let str1 = 'flirty and fun';
    let str2 = 'ffirty nad unl';

    expect(validAnagram(str1, str2)).toEqual(true);
  });
})