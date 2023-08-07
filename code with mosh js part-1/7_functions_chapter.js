//FUNCTION DECLARATION
// console.log(walk);

function walk() {
  console.log("walk");
}

//NAMED FUNCTION EXPRESSION
// console.log(run); //Uncaught ReferenceError: Cannot access 'run' before initialization

const run = function move() {
  console.log("run");
};

//ANONYMOUS FUNCTION EXPRESSION
const jump = function () {
  console.log("jump");
};

// console.log(run);
// console.log(jump);

//ARGUMENTS
function sum() {
  // console.log(arguments);
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

// console.log (sum(1,2,3,4,5,6,7,8,9));

//REST OPERATOR
function checkOutDiscount(discount, ...prices) {
  const total = prices.reduce((a, c) => a + c);
  return total * (1 - discount);
}

// console.log(checkOutDiscount(0.1,20,30));

//DEFAULT PARAMETER(should the last set of prameters)
function interest(principal, rate = 8, years = 2) {
  return ((principal * rate) / 100) * years;
}

// console.log(interest(10000,5,5));
// console.log(interest(10000));

// GETTERS AND SETTERS
//TRY AND CATCH
const profile = {
  firstName: "john",
  lastName: "smith",
  fullName() {
    return `${profile.firstName} ${profile.lastName}`;
  },
};

// console.log(profile.fullName());

const profile2 = {
  firstName: "raj",
  lastName: "kumar",
  get fullName() {
    return `${profile2.firstName} ${profile2.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string")
      throw new Error("entered value is not a string");

    const part = value.split(" ");
    if (part.length !== 2) throw new Error("enter first and lastname");
    this.firstName = part[0];
    this.lastName = part[1];
  },
};

// console.log(profile2);
try {
  profile2.fullName = "jane smith"; //change to see the error.
} catch (e) {
  alert(e);
}

// console.log(profile2.fullName);

//GLOBAL vs LOCAL SCOPE
let a = 10; //global scope.
let b = true;
{
  let a = 20; //local scope
  let c = 5;
  //if a variable is not available in local scope the block can access global scope variable.
  // console.log(a,b,c);
}
// console.log(a,b);
// console.log(c)// can't access c out of the block since it's local scope (block);

//VAR vs LET
// var is not block scoped its function scoped.
// globally declared var attaches to windows object.

function startVar() {
  for (var i = 0; i < 3; i++) console.log(i);

  console.log(i);
}

function startLet() {
  for (let i = 0; i < 3; i++) console.log(i);

  console.log(i);
}
// startVar();
// startLet(); //error. Since let is block scoped

//'THIS' KEYWORD
//'this' refrences the object that is executing the current function.

//method (in an object): this =>the object.
//function declaration: this => windows, global.
//'this' eg: function declaration
function playVideo(a) {
  console.log(a, this); //this refers to the windows object
}
// playVideo();

//'this' eg: constructor function
function Video(title) {
  (this.title = title), console.log(this); // refers to the constructor function
}

// const movie = new Video('a');
//'this' eg: object function
const video = {
  title: "a",
  play() {
    console.log(this); //refers to video object
  },
  tags: ["x", "y", "z"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        //forEach(callbackFn, thisArg)
        //we are in a regular function declaration now.
        console.log(this.title, tag); //shows windows obj unless we explitly set 'this' like shown after curly braces.
      } /*,this*/
    );
  },
  showTags2() {
    this.tags.forEach((tag) => console.log(this.title, tag, "arrow"));
    //arrow function inherits the 'this' from the containing function.
  },
};

// playVideo.call(video,1); //call(thisArg, arg1, /* …, */ argN)
// playVideo.call(video,[2]); //apply(thisArg, argsArray)
// const bounded = playVideo.bind(video); //bind(thisArg, arg1, arg2, /* …, */ argN)
// bounded(3); // creates a new copy of the orginal function and binded with a obj

const random = () => {
  console.log(this);
};
// random();

function rando() {
  console.log(this);
}
// rando();
