function validateAnagram(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }

  let freq1 = {};
  let freq2 = {};

 freq1 = freqCounter(str1, freq1);
 freq2 = freqCounter(str2, freq2);
 
 console.log(freq1, freq2);

 for( key in freq1 ){
   if(! (key in freq2)){
     return false;
   }else if(freq1[key] !== freq2[key]){
      return false;
   }
 }
 return true;
}


function freqCounter(str, obj){
  for(let i = 0; i < str.length; i++){
    if( ! (str[i] in obj)){
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  return obj;
}

console.log('validateAnagram', validateAnagram('olelh', 'hello'));