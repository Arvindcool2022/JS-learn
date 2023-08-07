//EXERCISE ONE

//my soln
function sum(...args) {
  let totalSum = 0;
  let invalidInput = 0;
  for (const element of args) {
    if (typeof element === 'number') totalSum += element;
    else if (Array.isArray(element))
      for (const value of element) totalSum += value;
    else ++invalidInput;
  }
  console.log('sum of the input are', totalSum);
  invalidInput !== 0
    ? console.log('invalid input(s) found:', invalidInput)
    : null;
}

// sum(10,[5,5],100,'4',{});

//reduce and filter method
const sum2 = (...arg) => {
  let totalSum = arg.reduce((acc, curVal) => {
    if (typeof curVal === 'number') return (acc += curVal);
    else if (Array.isArray(curVal))
      return acc + curVal.reduce((acc, num) => acc + num, 0);
    else return acc;
  }, 0);
  console.log('sum of the inputs are', totalSum);

  const invalidInput = arg.filter(
    (elements) => typeof elements !== 'number' && !Array.isArray(elements)
  ).length;
  console.log('invalid input(s) found:', invalidInput);
};

// sum2(10,[5,5],100,[],{},'4')

//mosh soln
const sum3 = (...items) => {
  if (items.length == 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
};

//EXERCISE TWO

const circle = {
  radius: 2,
  get area() {
    let area = Math.PI * this.radius * this.radius;
    return area.toFixed(3);
  },
};

circle.area = 50;
// console.log(circle, circle.area);

//EXCERCISE THREE

const numbers = [1, 2, 3, 4];
try {
  const count = countOccurrences(5, 1);
  // console.log(count);
} catch (e) {
  console.log(e);
  alert(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error('not an array');
  else
    return array.reduce((accumulator, current) => {
      const occurrence = current === searchElement ? 1 : 0;
      return accumulator + occurrence;
    }, 0);
}
