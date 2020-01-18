// Given a sorted array remove the duplicate values in place, and return the array,
// Solve using multiple pointers.


function removeDups(arr){
  let i = 0;
  let j = 1;

  while(j < arr.length){
    if(arr[j] !== arr[i] ){
      i++;
      arr[i] = arr[j];
    }else if(arr[i] === arr[j]){
      j++;
    }
  }

  while(i < arr.length - 1){
    arr.pop();
  }
  console.log(arr);

}

console.log(removeDups([0,0,1,2,5,5,5,7,8,9,9,9]));

