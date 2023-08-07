//EXERCISE ONE
const arrayFromRange = (min, max) => {
  let newArray = [];
  for (let i = min; i <= max; i++) newArray.push(i);
  return newArray;
};

const numbers = arrayFromRange(1, 5);
// console.log(numbers);

//CHAT GPT SOLN
const arrayFromRange1 = (min, max) => {
  return Array.from({ length: max - min + 1 }, (_, index) => min + index);
};

const numbers1 = arrayFromRange(10, 13);
// console.log(numbers1);

//EXERSISE TWO

// arr.pop(1);
// console.log(arr)

//soln-1
const include = (array, searchElement) => {
  for (const element of array) if (element === searchElement) return true;

  return false;
};

//soln-2
const include1 = (array, searchElement) => {
  return array.some((element) => element === searchElement);
};

// console.log(includes(arr,5));
// console.log(includes1(arr,1));

//EXERCISE THREE
// my soln
const except = (array, exclude) => {
  const output = [];
  for (const arrElem of array)
    if (!exclude.includes(arrElem)) output.push(arrElem);
  return output;
};

// console.log(except(arr,[1,2,3,]))
//chat gpt soln
const except1 = (array, exclude) => {
  return array.filter((arrElem) => !exclude.includes(arrElem));
};

//EXERCISE FOUR
let arr = [0, 1, 2, 3, 4];

//my soln
const movingAnElement = (array, index, offset) => {
  let output = array.map((x) => x); //output = [...array]; same
  let offsetValidator = index + offset;

  if (index < 0 || index >= array.length) console.error('invalid index');
  else if (offsetValidator < 0 || offsetValidator >= array.length)
    console.error('invalid offset');
  else {
    output.splice(index, 1); // delete
    output.splice(offsetValidator, 0, arr[index]); //insert
    return output;
  }
};

let output = movingAnElement(arr, 4, -3);

// console.log(output);

//mosh soln
let num = [1, 2, 3, 4];

const move = (array, index, offset) => {
  let position = index + offset;

  if (position < 0 || position >= array.length) {
    console.error('invalid-offset');
    return;
  }

  let output = [...array];
  let element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
};

let result = move(num, -3, 4);
// console.log(result);

//EXERCISE FIVE

const countOccurance = (array, searchElement) => {
  let count = 0;
  array.forEach((element) => (element === searchElement ? count++ : count));
  return count;
};

const countOccurance2 = (array, searchElement) => {
  return array.reduce(
    (accumlator, curValue) =>
      curValue === searchElement ? ++accumlator : accumlator,
    0
  );
};

let a = [1, 1, 1, 2, 2, 3, 4, 5];
let count = countOccurance2(a, 1);
// console.log(count);

//EXERCISE SIX

//sort soln
const sortDecending = (array) => array.sort((a, b) => b - a);

const getMax = (array) => sortDecending(array)[0];

//reduce soln
const getMax2 = (array) => array.reduce((a, c) => (a > c ? a : c));

let b = getMax2([10, 1, 5, 1000, 351, 5313, 131, 3, 3551]);
console.log(b);

//EXERCISE SEVEN

const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

// const sortDecending = array => array.sort((a, b) => b - a);

const movieSelector = (array) => {
  let output = [...movies];
  output = output
    .filter((obj) => obj.year === 2018 && obj.rating >= 4)
    .sort((a, b) => b.rating - a.rating)
    .map((obj) => obj.title);

  return output;
};

let movieResult = movieSelector(movies);
console.log(movieResult);
