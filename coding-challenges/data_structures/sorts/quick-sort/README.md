# Sorts

## Merge Sort

## Quick Sort
#### Authors: Caity Heath & Jacob Anderson

### Challenge
Implement a quick sort

### Approach
3 functions will be implemented to complete the quick sort.
* Pivot Helper
* Swap
* Quick Sort

#### Pivot Helper
* Accepts 3 arguments. 
    array, start index and end index
* Look at pivot i.e. start
* Store the index in a variable.
* Increment the variable by one for each item less than the pivot value
* Call swap on the pivot value, which will swap the pivot value with the swap value.

#### Swap 
* Accepts and array and two indices.
* Store the value of the first index in a temp variable
* Assigns the value of the second index to the first index. 
* Assigns the temp variable to the second index. 
* No return

#### Quick Sort
* Accepts three arguments
    arrary, left, right
* sets a base case of if(left < right)
* call quickSort recursively on the left
* call quickSort of the right.

* Return the array in place


### Efficiency 
#### Time O(n log n)
#### Space O(log n)

### Solution

