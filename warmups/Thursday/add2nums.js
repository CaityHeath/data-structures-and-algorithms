let LinkedList = require('../Tuesday/jan7/linkedlist');


let l1 = new LinkedList();
l1.append(2);
l1.append(4);
l1.append(3);




let l2 = new LinkedList();
l2.append(5);
l2.append(7);
l2.append(8);


let sumOfTwo = (l1, l2) => {
  let num1 = parseInt(llIterator(l1));
  let num2 = parseInt(llIterator(l2));
  let sum = num1 + num2;
  sum = sum.toString();
  return sum.split('');


}

let llIterator = (ll) => {
  let current = ll.head;
  let num = '';
  while(current){
    num = `${current.value}${num}`;
    current = current.next;
  }
  return num;
}


console.log(sumOfTwo(l1, l2));
