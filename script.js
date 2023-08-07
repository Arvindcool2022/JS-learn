function Shapes(color) {
  this.color = color;
}
Shapes.prototype.dupicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  this.radius = radius;
  Shapes.call(this, color); //No, `Shapes.call(Circle, color)` would not be the correct way to achieve what you're attempting in this context.

  // When using the `.call()` method to invoke a function, the first argument should be the value that you want to set as the `this` context inside the function. In your case, you want to set `this` to the instance of the `Circle` being created.

  // So, `Shapes.call(this, color)` is the correct syntax. It sets the `this` context of the `Shapes` constructor to the current instance of the `Circle` being created, allowing you to initialize the properties and methods of the `Shapes` parent class for that instance.
}

// Circle.prototype = Object.create(Object.prototype); //? by default.
Circle.prototype = Object.create(Shapes.prototype);
// now the 'Circle.prototype.constructor is changed to shapes' by default to change it back.
Circle.prototype.constructor = Circle;
// it still inherited functions from shapes and it is child of shapes but constructor is circle itself not shapes.

Circle.prototype.draw = function () {
  console.log("draw");
};
function extend(Child, Parent) {
  //intermediate function inhertance.
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Square(size) {
  this.size = size;
}
extend(Square, Shapes);
// to override method
Square.prototype.dupicate = function () {
  //# to be done after extending not before.
  //#to call parents method as well or to build upon it. use
  Shapes.prototype.dupicate.call(this);
  console.log("duplicate Square");
};

const s = new Shapes();
const c = new Circle(5, "red");
const sq = new Square(4);
