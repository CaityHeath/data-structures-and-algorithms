'use strict';
/*
Write a function that accepts a base and an exponent. The function should return the power of the base to the exponent. This function will mimic the functionality of the Math.pow().
*/

function power(base, exp){
  if(exp === 0){return 1}
  return base * power(base, exp - 1);
}

console.log(power(5, 2));


/*
Write a function that accepts a number and returns the factorial of that number.
*/

function factorial(num){
  if(!num){return 1}
  return num * factorial(num - 1);
}


/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all
*/

function productOfArray(arr){
  if(arr.length === 1){return arr[0]}
  return arr[0] * productOfArray(arr.slice(1));
}


/* 
Write a function that accepts a number and adds up all of the numbers from 0 - the number passed into the function
*/

function recursiveRange(num){
  if(num === 1){return 1}
  return num + recursiveRange(num-1);
}


/*
Write a recursive function called fib which accpets a number and returns the nth number in the fibonacci sequence. 
*/
function fib(n){
if(n < 3) {return 1}
console.log(n);
return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));