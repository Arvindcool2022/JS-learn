const myMemoize = (func, context = this) => {
  const cache = {};

  return (...arg) => {
    const argString = JSON.stringify(arg);
    if (!cache[argString]) cache[argString] = func.call(context, ...arg);

    return cache[argString];
  };
};

const bigTask = (num1, num2) => {
  // big task start
  const startTime = new Date().getTime();
  let endtime = new Date().getTime();
  while (endtime - startTime < 2000) {
    endtime = new Date().getTime();
  }
  // big task ends

  return num1 * num2;
};

const memoizedBigTask = myMemoize(bigTask);

console.time('first');
console.log(memoizedBigTask(5000, 5500));
console.timeEnd('first'); // console.time works in vs code not here

console.time('second');
console.log(memoizedBigTask(5000, 5500));
console.timeEnd('second');
