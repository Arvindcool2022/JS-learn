//* this
let z = {
  x: 10,
  printOne() {
    console.log(`first`, this.x);
  },
  printTwo() {
    const c = () => console.log(`second`, this.x);
    c();
  },
  printThree(c) {
    c();
  },
  printFour: c => {
    c();
  }
};

function y() {
  console.log(`third`, this.x);
}
let yArrow = () => console.log(`fourth`, this.x);
// z.printOne(); // the z object
// z.printTwo(); // the window object
// z.printThree(y); // the window object
// z.printThree(yArrow); // the window object
z.printFour(y); // the window object
z.printFour(yArrow); // the window object

// per = a; // from object to number

//! arrow funtion used the this value of the containing function
