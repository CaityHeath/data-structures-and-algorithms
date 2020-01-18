// Given an array find the indices that summate to 0
// Solve using the multiple pointers pattern.

function sumOfZero(arr){
  let left = 0; 
  let right = arr.length - 1;

  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    }else if(sum < 0){
      left++;
    }else{
      right--;
    }
  }
}


console.log(sumOfZero([-10, -5, -3, -2, 0, 1, 3, 4, 7, 9]));