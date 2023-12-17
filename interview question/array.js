const arr = [1, 8, 10, 15, 118, 250];

const mapRes = arr.map(x => x + 10);

console.log(mapRes);

const fEachRes = arr.forEach((x, i) => {
  arr[i] = x + 1;
});
console.log(fEachRes);
console.log(arr);

const a = 10;
window.a = 20;

console.log(a);

window.b = 200;
let b = 100;

console.log(b);

// window is always shadowed by let

(function () {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
})();

const arr1 = [...Array(11).keys()].map(x => x + Math.ceil(Math.random() * 10));

const insertEvery = (array, data, nth) => {
  const newArr = [...array];
  let pos = 0;
  for (let i = 0; i < Math.floor(array.length / nth); i++) {
    pos += nth;
    newArr.splice(pos + i, 0, data);
  }

  return newArr;
};

console.log(insertEvery(arr1, 'hi', 3));

const createPromise = (msg, time, status) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      status ? resolve(msg) : reject(msg);
    }, time);
  });

const p1 = createPromise('p1', 0, true);
const p2 = createPromise('p2', 1000, true);
const p3 = createPromise('p3 error', 3000, false);

const getData = async (...arg) => {
  try {
    const response = await Promise.all(arg);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

getData(p1, p2, p3);
Promise.all([p1, p2, p3])
  .then(v => console.log(v))
  .catch(err => console.error(err));
