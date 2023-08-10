//# setTimeout(func|code, [delay], [arg1], [arg2], ...)

let count = 0;
let s = document.querySelector('#demo');
// document.addEventListener('DOMContentLoaded', () => {
//   let s = document.querySelector('s');
//   if (s) {
//     s.setAttribute('style', 'font-size: 3rem;');
//   }
// });

function countdown() {
  if (count < 10) count = '0' + count;
  s.innerHTML = `<p>${count}</p>`;
  count++;
}

let startClock = n => {
  countdown();

  n > 0 ? setTimeout(() => startClock(n - 1), 1000) : countdown();
};

startClock(100);

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => {
  clearInterval(timerId);
  alert('stop');
}, 5000);

//TODO: url request on repeat
// let delay = 5000;

// let timerId = setTimeout(function request() {
//   ...send request...

//   if (request failed due to server overload) {
//     // increase the interval to the next run
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);

// }, delay);

// # Zero delay scheduling with setTimeout(func, 0) (the same as setTimeout(func)) is used to schedule the call “as soon as possible, but after the current script is complete”.

// EXERCISE 1
function printNumbers(from, to) {
  if (from >= to) throw new Error('invalid arguments');

  let count = from;
  console.log(count);

  function printNext() {
    count++;
    if (count <= to) {
      console.log('in', count);
      setTimeout(printNext, 5000); //# while this waits for 5 sec remaing code gets completed.
    }
  }

  printNext();
  console.log('out', count);
}

console.log('outer');
printNumbers(1, 10);
console.log('outer');
