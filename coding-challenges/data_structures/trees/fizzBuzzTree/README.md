# FizzBuzz Tree
This application conducts "FizzBuzz" on a tree while traversing through it by changing the node values on the tree inplace. 

## Authors
Tanner Seramour & Caity Heath

## Challenge
Write a function called FizzBuzzTree which takes a tree as an argument. Without utilizing any of the built in methods available to JavaScript, determine whether or not the value of each node is divisible by 3, 5 or both and change the alue of each of the nodes 
* 3 --> "fizz"
* 5 --> "buzz"
* both --> "fizzbuzz"

## Approach & Efficiency

We have decided to break the functionality of this application up. Our solution contains two functions. One takes a node as a parameter and checks assigns its value to the corresponding fizzbuzz value based off the fizzbuzz ruleset. The second function traverses the tree and calls the check function on each node. 

The run-time efficiency for our approach is O(1). We never don't use arrays and so we do not need any loops. 

## Solution

Problem Domain, Visual and Psuedo Code
![](./assets/1_14_pd.JPG)

Big O and Solution Code including Node and BinaryTree constructors
![](./assets/1_14_code.JPG)
