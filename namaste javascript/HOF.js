const radius = [3, 2, 1, 4];
const square = [5, 10, 2, 1];

const calculate = cb => arr => arr.map(x => cb(x));

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

const calculateCircleArea = calculate(circleArea);
const calculateCircleCircumference = calculate(circleCircumference);
const calculateCircleDiameter = calculate(circleDiameter);
const calculateSquareArea = calculate(squareArea);
const calculateSquareDiagonal = calculate(squareDiagonal);
const calculateSquareDiagonalToArea = calculate(squareDiagonalToArea);

console.log(calculateCircleArea(radius));
