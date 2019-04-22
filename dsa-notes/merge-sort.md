# Merge Sort

There is no one way to sort, it depends on use-case. Merge sort cuts an array in half and then combines the array back recursively.

#### Principles
```
1. Easier to sort small arrays
2. Its easier to combine sorted arrays than unsorted arrays

in: [8, 3, 2, 9, 7, 1, 5, 4, 6]
out: [1, 2, 3, 4, 5, 6, 7, 8, 9]

* first find the midpoint and floor it (divide and conquer). => mid = 9/2 = 4
* Cut the input array in half => [8 ,3, 2, 9] 
* Repeat => [8, 3]  |  [2, 9]
         => [8] | [3]

* Evaluate the two arrays: Is 3 bigger than 8? if not add the contents of the first array to the second.  => [3, 8]

* Now do the right side => [2, 9]

* Evaluate left from right of the two sorted arrays: [3, 8], [2, 9] is i < j? => [2, 3, 8, 9] ✔︎

fast forward: Once the two sides are sorted...evaluate the two sorted arrays like so 

Is i < j if so add it to the new array and then increment i, if i > j add j to the new array and increment j
[2,3,8,9] | [1,4,5,6,7]

[1] i=0, j=1
[1, 2] i=1, j=1
[1, 2, 3] i=2, j=1
[1, 2, 3, 4] i=2, j=2
[1, 2, 3, 4, 5] i=2, j=3
[1, 2, 3, 4, 5, 6] i=2, j=4
[1, 2, 3, 4, 5, 6, 7] i=2, j=4
[1, 2, 3, 4, 5, 6, 7] i=2, j=4
[1, 2, 3, 4, 5, 6, 7, 8] i=3, j=4
[1, 2, 3, 4, 5, 6, 7, 8, 9] 


```
