//* Hoisted in global execution context
//# Script
/*
Person: undefined
Professor: undefined
a: undefined
b: undefined
diff: undefined
multiply: undefined
per: undefined
prof: undefined
*/

//# Global
/*
Circle: ƒ Circle(radius) {
  this.radius = radius;
}
c: undefined
sum:ƒ sum(a, b) {
  let c;
  c = a + b;
  return c;
}
*/

//! all this happened even before running single line of code

var c = 'blue';

// console.log(sum);
function sum(a, b) {
  let c;
  c = a + b;
  console.log(c);
}

var multiply = (a, b) => a * b;

// console.log(Circle);
function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.dupicate = function () {
  console.log(this, 'dupicate');
};

let a = 10;
const b = true;

let diff = function (a, b) {
  let c;
  c = a + b;
  return c;
};

class Person {
  constructor(x) {
    this.name = x;
  }

  selfIntro() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

class Professor extends Person {
  teaches;

  constructor(a, b) {
    super(a);
    this.teaches = b;
  }
  selfIntro() {
    console.log(
      `Hello, I'm ${this.name}, a Professsor and I teach ${this.teaches}`
    );
  }
}

let per = new Person('arvind');
// per.selfIntro();
let prof = new Professor('john', 'maths');
// prof.selfIntro();
