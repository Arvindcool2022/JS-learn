function abc() {
  xyz();

  console.log('inside abc');
}

function xyz() {
  setTimeout(sample, 0);
}

function sample() {
  console.log('inside sample');
}
abc();

setTimeout(function () {
  console.log('1 second!');
}, 10000);

let count = 0;
const start = +new Date();
while (+new Date() - start < 5000) {
  count++;
}
//blocks the call stack(main thread) for 5 seconds

console.log('done', count);
