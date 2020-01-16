var isPalindrome = function(x) {
  let num = x.toString();
  if(num[0] === num[num.length - 1]){
      
      let j = 0; 
      
      for(let i = num.length - 1; i >= 0; i--){
          if(num[i] === num[j]){
              j++;
          }else{
              return false;
          }
      }
      
  }else{
      return false;
  }
  return true;
};