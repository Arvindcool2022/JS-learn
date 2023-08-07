function Circle(radius) {
  (this.radius = radius),
    (this.draw = () => {
      console.log("draw");
    });
  this.move = function () {
    console.log("move");
  };
}

const circleOne = new Circle(1);

// for (const key in circleOne) {
//     console.log(circleOne[key])
// }
// if('radius' in circleOne)
//     console.log('radius property is in circleOne');
// if('diameter' in circleOne)
//     console.log('diameter property is in circleOne');
// else console.log('diameter property is not in circleOne obj');

// for (const [key, value] of Object.entries(circleOne)) {
//     console.log(`${key}: ${value}`);
//   }

//*Object static methods

// console.log(Object.entries(circleOne));
// // this returns an Array of arrays(key value pair inside).
// console.log(Object.keys(circleOne));
// // array of key only.
// console.log(Object.values(circleOne));
// // array of values only.
// console.log(Object.hasOwn(circleOne,'radius'))
// // checks if the object has a certain property and returns boolean result.

//* Object.freeze(): Provides the highest level of immutability. Once an object is frozen, you can't add, modify, or delete its properties.
// Object.freeze(circleOne) //? comment out to see the diffrence.

// circleOne.name = 'hi'; //! can't add
// console.log(circleOne.name);

// delete circleOne.radius; //! can't remove
// console.log(circleOne);

// circleOne.radius = 10; //! can't modify
// console.log(circleOne.radius);

//* Object.seal(): Allows you to modify existing properties, but you can't add new properties or delete existing ones.
// Object.seal(circleOne) //? comment out to see the diffrence.

// circleOne.name = 'hi'; //! can't add
// console.log(circleOne.name);

// delete circleOne.radius; //! can't remove
// console.log(circleOne);

// circleOne.radius = 10; //? but can modify
// console.log(circleOne.radius);

//* Object.preventExtensions(): Allows you to modify existing properties and delete existing ones, but you can't add new properties.

// Object.preventExtensions(circleOne) //? comment out to see the diffrence.

// circleOne.name = 'hi'; //! can't add
// console.log(circleOne.name);

// delete circleOne.draw; //? but can remove
// console.log(circleOne);

// circleOne.radius = 10; //? and also can modify
// console.log(circleOne.radius);

//* ABSTRACTION: Private properties and method.

function Square(length) {
  this.length = length;

  let area = length * length;
  // this.area = () => area;

  let perimeter = () => 4 * length;
  // this.perimeter = (length) => perimeter(length);

  let diagonal = () => Math.sqrt(2) * length;
  Object.defineProperties(this, {
    diagonal: {
      get: function () {
        return diagonal();
      },
    },
    perimeter: {
      get: function () {
        return perimeter();
      },
    },
  });
}

const sq1 = new Square(5);
console.log(sq1, sq1.diagonal, sq1.perimeter);
