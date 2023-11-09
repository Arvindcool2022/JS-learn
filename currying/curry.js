const sum = a => b => b ? sum(a + b) : a;

console.log(sum(1)(2)());

const curryFunc = f => {
  const curry = (...args) =>
    args.length >= f.length ? f(...args) : (...next) => curry(...args, ...next);

  return curry;
};

const sum2 = (a, b, c, d, e) => a + b + c + d + e;

const totalSum = curryFunc(sum2);

console.log(totalSum(1, 2)(3, 4, 5));

const changeElemText = id => content =>
  (document.getElementById(id).textContent = content);

const changeHeader = changeElemText('h1');
const changePara = changeElemText('p');

changeHeader('changed header');
changePara('changed para');
