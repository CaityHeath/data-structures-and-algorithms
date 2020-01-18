function same(arr1, arr2){
  let freq1 = {};
  let freq2 = {};

  for(let i = 0; i < arr1.length; i++){
    if(!freq1[arr1[i]]){
      freq1[arr1[i]] = 1;
    }else{
      freq1[arr1[i]]++;
    }
  }

  for(let j = 0; j < arr2.length; j++){
    if(!freq2[arr2[j]]){
      freq2[arr2[j]] = 1;
    }else{
      freq2[arr2[j]]++;
    }
  }

  for(key in freq1){
    let square = key ** 2;
    
    console.log(key, square);
    if( !(square in freq2) ){
      return false
    }else if(freq2[square] !== freq1[key] ){
      return false;
    }
  }
  return true;
}

console.log(same([1,5,3], [1,4,9]));