setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById('demo').innerHTML = date.toLocaleTimeString();
}

let colors = setInterval(myBackground, 3000);
let count = 0;

function myBackground() {
  const randomOne = Math.floor(Math.random() * 256);
  const randomTwo = Math.floor(Math.random() * 256);
  const randomThree = Math.floor(Math.random() * 256);

  document.querySelector('body').style.backgroundColor = `rgba(${
    randomOne / 2
  }, ${randomTwo / 2}, ${randomThree / 2},0.5)`;
  document.querySelector('body').style.color = `rgb(${randomOne / 4}, ${
    randomTwo / 4
  }, ${randomThree / 4})`;
  count++;
  console.log('count', count, '=> rgb', randomOne, randomTwo, randomThree);
  if (count > 20) clearInterval(colors);
}

myBackground();

// EXERCISE 1
function printNumbers(from, to) {
  if (from >= to) throw new Error('invalid arguments');

  let count = from;
  console.log(count);

  function printNext() {
    count++;
    let int = setInterval(printNext, 500);
    if (count <= to) {
      console.log('in', count);
    } else clearInterval(int);
  }
  printNext();

  console.log('out', count);
}

console.log('outer');
printNumbers(1, 10);
console.log('outer');
//# The setInterval function sets up a recurring timer that calls the specified function (printNext in your case) at a regular interval. It doesn't create a separate track or thread of execution. The function you pass to setInterval will still be executed within the same context and thread as the rest of your code.
