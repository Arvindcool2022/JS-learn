//ADDING ELEMENTS
let numbers = [2, 3];

numbers.push(4, 5); //ending
numbers.unshift(-1, 0, 1); //beginning
numbers.splice(2, 2, 'one', 'two', 'three'); //middle(At position 2, add 2 elements)
console.log(numbers);
numbers.splice(2, 2, 1, 2);
// console.log(numbers);

// FINDING ELEMENTS PRIMITIVE TYPE
// console.log(numbers.indexOf(5, 3)); //second argument for where the the search begins.
//numbers.lastindexof
// console.log(numbers.includes(0));
numbers.includes(10);

// FINDING ELEMENTS REFERENCE TYPE
const dimension = [
  { name: 'cubeoid', x: 8, y: 5, z: 5 },
  { name: 'cube', x: 5, y: 5, z: 5 },
  { name: 'circle', r: 5 },
];

// console.log(dimension.includes({name:'circle', r:5 })); //since its reference type variable both are stored in a diff memory location.

const shapeOne = dimension.find(function (shape) {
  return shape.name === 'circle';
});
const circleIndex = dimension.findIndex(function (shape) {
  return shape.name === 'circle';
});

// console.log(shapeOne);
// console.log(shape); //not defined
// console.log(circleIndex);

//ARROW FUNCTIONS
const shapeTwo = dimension.find((shape) => shape.name === 'cube');
//same as ShapeOne.
// 1. single parameter does need bracket
// 2. single return statement doesn't need curly brases and the return key word is removed as it is default.
// console.log(shapeTwo);

//REMOVING ELEMENTS

const last = numbers.pop(); //ending
// console.log(last);
// console.log(numbers);

const first = numbers.shift(); //begining
// console.log(first);
// console.log(numbers);

const middle = numbers.splice(3, 1);
// console.log(middle); // string comes out as array?
// console.log(numbers);

//EMPTYING AN ARRAY

let arr = [1, 2, 3, 4, 5, 6];
let arr2 = arr;
//soln 1
// arr=[];
// in this the reference memory of the original array is deleted since arr2 is refering to the same address now.

//soln 2
arr.length = 0;
//all length method does is changes the length in refernce memory itself can change to higher or lower or empty.
// orginal array's reference is truncated(shortened) can also be truncated to a higher number.

//soln 3
// arr.splice(0, arr.length);

//soln 4
// while (arr.length > 0)
// arr.pop();

//COMBINING AND SLICING ARRAY

arr = ['a', 'b', { c: 1 }];
arr2 = ['d', 'e', 'f'];

const combined = arr.concat(arr2);
// console.log(combined);

const splice = combined.slice(); // returns a copy
// const splice1 = combined.slice(2) // returns value AFTER index 2
// const splice2 = combined.slice(2) // returns value AFTER index 2 and stops AFTER 5

//IMPORTANT: IF THE ARRAY COPIED OR CONCATED HAD A REFERANCE TYPE IN IT. IT JUST COPIES THE ADDRESS OF REFERANCE MEANING ANY CHANGE TO EITHER WILL AFFECT THE OTHER VARABLE WITH SAME ADDRESS.

//SPREAD OPERATOR

const combined1 = [...arr, ...arr2];
// console.log(combined1);

const combined2 = [...arr, 'x', 'y', ...arr2, 'z'];
// console.log(combined2);

const copy = [...combined]; //to copy an array
combined.length = 0;
// console.log(copy);

//ITERATING AN ARRAY

// console.log(elements);

for (let elements of combined1)
  combined1.forEach(function (elements) {
    // console.log(elements);
  });

// combined1.forEach((elements, index) => console.log(index, elements));

// JOINING ARRAY and SORTING ARRAY

const myName = 'arvind';

const split = myName.split('');
// console.log(split);

split.reverse();
// console.log(split);

const joined = split.join('');
// console.log(joined);

const name2 = 'unique name';

const split1 = name2.split(' ');
// console.log(split1);

const joined2 = split1.join('__');
// console.log(joined2);

const num = [3, 2, 5, 4, 1];
num.sort();
// console.log(num);
num.reverse();
// console.log(num);
num.reverse();

const city = [
  { code: 1, city: 'chennai' },
  { code: 2, city: 'DELHI' },
  { code: 3, city: 'mumbai' },
  { code: 4, city: 'ahmedabad' },
];
// console.log(city);

city.sort(function (a, b) {
  const nameA = a.city.toLowerCase();
  const nameB = b.city.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA < nameB) return 1;
  return 0;
});

// console.log(city);

//TESTING THE ELEMENT OF AN ARRAY
numbers.push(-1);
const allPositive = numbers.every((value) => value >= 0);
console.log(allPositive);
//as soon as it find a value that DOES NOT MATCH the return statement the funtion stop and returns FALSE.

const atLeastOnePositive = numbers.some((value) => value >= 0);
console.log(atLeastOnePositive);
// the reverse of thr every method.
//as soon as it find a value that DOES WATCH the return statement the funtion stop and returns TRUE.

// FILTERING AN ARRAY

const filtered = numbers.filter((n) => n >= 1);
console.log(filtered);

//MAPPING AN ARRAY

const items = filtered.map((n) => '<li>' + n + '</li>');
const html = '<ul>' + items.join(' ') + '</ul>';
console.log(html);

const items2 = numbers.map((n) => ({ value: n })); //put object literal into a parenthesis otherwise javascript will parse the curley brace into function block.
console.log(items2);

// CHAINING MULTIPLE METHOD FUNCTIONS (short-hand for above)
console.log(numbers);

const items3 = numbers
  .filter((n) => n >= 0) //filters negative numbers.
  .map((n) => ({ value: n })) //maps our array to a object.
  .filter((obj) => obj.value > 1) //filters object properties with 0 and 1.
  .map((obj) => obj.value); //maps(reads and returns) our number type from value property back as array.
console.log(items3);

//REDUCING AN ARRAY
let sum = 0; //for of method
for (let n of numbers) sum += n;
console.log(sum);

//reduce method
//used to reduce an array to a single value by applying a callback function to each element of the array.
const sum1 = numbers.reduce((accumalator, curentValue) => {
  return accumalator + curentValue;
}, 0); //1st argument is a calback func and second is 0.
console.log(sum1);
//inside th function
//loop:1  acc = 0(declared after curly brace) -> curVal = 0 -> a = 1
//loop:2  acc = 0 -> curVal = 1 -> a = 1
//loop:3  acc = 1 -> curVal = 2 -> a = 3
//loop:4  acc = 3 -> curVal = 3 -> a = 6
//loop:5  acc = 6 -> curVal = 4 -> a = 10
//loop:6  acc = 10 -> curVal = (-1) -> a = 2
