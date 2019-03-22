# Hash Map
## Author : Caity Heath


---

### What is a Hash Map?
Hash Maps are a data structure which provides an efficient way of storing key value pairs. The heart of a hash table is an array with another data-structure at each index. i.e. array, linked-list, stack or queue. 
Hash maps use a hashing algorithm which takes a key value and returns an index, the key will always return the same index. 

---
### Reasons for Hashmaps
* O(1) Lookup
* Easy to access keys and values

### Hashing
Hashing should always be deterministic. Meaning that there cannot be any ounce of randomness. An input should have the same output 100% of the time. 

### Collisions 
One or more key hashes to the same index. If this happens it can be resolved by storing the key value pair as a node in a linked list. Indices in a hashmap are often referred to as buckets for this reason. 

---

### In my implementation of a hashmap..
 If there are duplicate keys to an index, then the values are chained to that index by a linked-list. This way when you search for a value you know exactly what the location of the key is and you can do a simple lookup which prevents you from having to do a linear search. When a key is first generated an index,a lookup is done to see if that index has any values stored in it yet. If it doesn't, then a link list is instatiated and that key becomes the head. If the index already does have a value stored in it then the key is chained to the linked-list. 




### Methods
* `add()` -> Used when adding a new key/value pair to a hash table, sends the key to be hashed and adds the key/value pair to the index returned form the hashing. 

* `get()` -> Takes a key, gets the hash and goes to the index location returned from the hash. 

* `contains()` -> Takes a key and returns a boolean on whether the key exists in the hashtable. 

* `getHash()` -> Takes a key as a string, runs the hashing algorithm and then returns an index where the key/value pair should be 

---

### Testing 
This repository has 4 testing suites, one for each of the above methods. Inputs are tested along with what the expected output should be, as well as data structuring in the hashmap once the values are added. 

To run the tests use the following command
`jest hashtable.test.js`