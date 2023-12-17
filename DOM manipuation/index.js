try {
  //   throw new Error('arvind');
  console.log('before');
  const a = b + 10;
  console.log('after');
  console.log(a);
} catch (err) {
  console.error('FROM CATCH:', err);
} finally {
  console.log('finally');
}

console.log('out');

let a;

console.log(ShadowRoot.__proto__.__proto__.__proto__);

const element = document.querySelector('video').querySelectorAll('div');

console.log(element);
const arr = [1, 2, 3, 4, 5];

arr.forEach(function (e, i) {
  this[i] = e + 1;
}, arr);

console.log(arr);
