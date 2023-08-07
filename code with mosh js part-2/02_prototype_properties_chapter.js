let x = {};
let y = {};

console.log(y);
console.log(Object.getPrototypeOf(x));
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

//* multilevel inheritance
let arr = [];
console.log(arr);
console.log(Array());
console.log(Object.getPrototypeOf(Array())); //? last line is same as Object.getPrototypeOf(x)
//# arr <= Array <= Object
//# 'arr' is derivied from 'Array' which is derived from 'Object'

function Circle(radius) {
  this.radius = radius;
}

const circle1 = new Circle(4);
const circle2 = new Circle(2);

console.log(circle1);
console.log(circle2);
console.log(Object.getPrototypeOf(circle1) === Object.getPrototypeOf(circle2));
//# circle1 <= Circle <= Object
//# 'circle1' is derivied from 'Circle' which is derived from 'Object'

//* Property attribute.

circle1.color = "red";
circle1.border = "solid";
//# Writable (cant modify)
Object.defineProperty(circle1, "color", {
  writable: false,
});
circle1.color = "pink";
console.log(circle1.color);

Object.defineProperty(circle1, "color", {
  writable: true,
});
circle1.color = "pink";
console.log(circle1.color);

//# enumerable (cant iterate)
Object.defineProperty(circle1, "color", {
  enumerable: false,
});
for (const key in circle1) console.log(key);
Object.defineProperty(circle1, "color", {
  enumerable: true,
});
for (const key in circle1) console.log(key);

//# Configrable (cant delete)
Object.defineProperty(circle1, "border", {
  configurable: false,
});
delete circle1.border;
console.log(circle1.border);

// Object.defineProperty(circle1, 'border', {
//     configurable:true
// }); //! The configurable property controls whether a property's configuration can be changed, and once set to false, it cannot be changed back to true.
Circle.prototype.draw = () => {
  console.log("draw");
};
circle1.draw();
console.log(circle1.toString("radius"));

// Circle.prototype.toString = ()=> {
//     console.log(this);//? windows?
//     return 'the radius of the circle is ' + this.radius;
// }

// prototype member. a function is defined without prototype key word it is called instance member.
Circle.prototype.toString = function () {
  console.log(this);
  return "the radius of the circle is " + this.radius;
};
console.log(circle1.toString("radius"));
console.log(circle1.radius);

//# Object.keys can't iterate over instance members while forin loop can

//#dont change built in Object properties or add to it
