function memo(fn) {
  const myCache = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);

    if (!myCache[argsCache]) myCache[argsCache] = fn(...args);

    return myCache[argsCache];
  };
}

const bigFunc = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) {}

  return num1 * num2;
};

const memoizedBigFunc = memo(bigFunc);

console.time('first call');
console.log(memoizedBigFunc(8520, 6547));
console.timeEnd('first call');
console.time('second call');
console.log(memoizedBigFunc(9632, 1235));
console.timeEnd('second call');
console.time('third call');
console.log(memoizedBigFunc(8520, 6547));
console.timeEnd('third call');
console.time('fourth call');
console.log(memoizedBigFunc(9632, 1235));
console.timeEnd('fourth call');
