//# callback.
//# A callback is a function passed as an argument to another function.

const arr = [1, 2, 3, 4, 5, -1, -2];

const postiveNums = removeNeg(arr, (x) => x >= 0);
// console.log(postiveNums);

function removeNeg(numbers, callback) {
  const newArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      newArray.push(x);
    }
  }
  return newArray;
}

//# When you pass a function as an argument, remember not to use parenthesis.
