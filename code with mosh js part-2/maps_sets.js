// `Map`, `WeakMap`, `Set`, and `WeakSet` are advanced data structures introduced in JavaScript to address specific use cases and scenarios. Each of these data structures has unique characteristics and purposes. Let's explore the use cases for each of them:

//# 1. **Map:**
//    - A `Map` is a collection of key-value pairs, where each key is unique.
//    - Use `Map` when you need to associate values with specific keys and maintain a reliable order of insertion.
//    - `Map` allows any type of key, including objects, whereas in regular JavaScript objects, keys are implicitly converted to strings.
//    - Use cases: Storing metadata, implementing caches, managing data relationships, etc.

//# 2. **WeakMap:**
//    - A `WeakMap` is similar to a `Map`, but with certain differences:
//      - Keys in a `WeakMap` must be objects (primitive values are not allowed as keys).
//      - Entries in a `WeakMap` are weakly held, which means they do not prevent their keys from being garbage collected if no other references to the key exist.
//    - Use `WeakMap` when you need to associate data with objects without preventing those objects from being garbage collected when no longer needed.
//    - Use cases: Storing private data associated with objects, avoiding memory leaks in scenarios where you want to attach data to objects without keeping them alive.

//# 3. **Set:**
//    - A `Set` is a collection of unique values (no duplicates allowed).
//    - Use `Set` when you need to store a list of distinct values and ensure uniqueness.
//    - `Set` provides efficient methods for checking for the presence of an element and iterating over elements.
//    - Use cases: Removing duplicates from arrays, checking membership, managing lists of items, etc.

//# 4. **WeakSet:**
//    - A `WeakSet` is similar to a `Set`, but with certain differences:
//      - Like `WeakMap`, keys in a `WeakSet` must be objects.
//      - Entries in a `WeakSet` are also weakly held, allowing the objects to be garbage collected if no other references to them exist.
//    - Use `WeakSet` when you need to maintain a list of objects without preventing those objects from being garbage collected.
//    - Use cases: Keeping track of a set of objects in a memory-efficient manner, associating metadata with objects without preventing their cleanup.

// In summary, these data structures provide various ways to manage and organize data in JavaScript, with specific features catering to different scenarios. Choose the appropriate data structure based on your needs to achieve better code clarity, maintainability, and performance.

//* SET
//# A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

'use strict';

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const mySet = new Set(arr);
console.log(mySet); //#cant add dupicate values.
console.log(mySet.size);
const obj = { name: 'john', age: 10 };
mySet.add(obj);
console.log(mySet);
console.log(mySet.size);
const myString = 'hi';
mySet.add(myString);
console.log(mySet);
console.log(mySet.size);
const boo1 = true;
// mySet.add(boo1);
// console.log(mySet);
// const boo2 = true;
// mySet.add(boo2);
// console.log(mySet);

//* MAP
//#Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

const myMap = new Map();

myMap.set(myString, arr);
console.log(myMap);
myMap.set(boo1, obj);
console.log(myMap);
myMap.set(arr, arr);
myMap.set(1, 10);
console.log(myMap);
console.log(myMap.delete(1)); //? true?
console.log(myMap.entries());
console.log(myMap.get(arr));
console.log(myMap.size);
console.log(myMap.values(obj)); //? what
myMap.clear();
