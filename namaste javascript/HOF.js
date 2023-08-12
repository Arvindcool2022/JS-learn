const radius = [3, 2, 1, 4];
const square = [5, 10, 2, 1];

const calculate = (arr, cb) => arr.map(x => cb(x));

function circleArea(x) {
  return Math.PI * x * x;
}
function circleCircumference(x) {
  return Math.PI * x * 2;
}
function circleDiameter(x) {
  return 2 * x;
}

function squareArea(x) {
  return x * x;
}

function squareDiagonal(x) {
  return x * Math.sqrt(2);
}

function squarePerimeter(x) {
  return 4 * x;
}

function squareDiagonalToArea(x) {
  return (x * x) / 2;
}
