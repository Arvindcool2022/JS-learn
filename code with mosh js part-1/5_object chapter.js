//*CREATE OBJECT WITH OBJECT LITERIAL
const car = {
    name: 'mustang',
    color: 'black',
    specialEdition: true,
    accessories: {
        interior: 'seatCover',
        exterior: 'spoiler'
    },
    currentCondition() {
        console.log("good");
    }
}
// console.log(car);

//*FACTORY FUNCTION
function createProfile(firstName,lastName,age,married) {
    return {
        firstName,
        lastName,
        age,
        married,
        creditScore: function (){
            console.log("x points");
        },
        fullName: function() {
            console.log(person.firstName+person.lastName)
        }
    }
}

const profile1 = createProfile('john','smith',30,true)
// console.log(profile1);
const profile2 = createProfile('ben','paker',25,false)
// console.log(profile2);

//*CONSTRUCTOR FUNCTIONS
//should be in PASCAL NOTATION
//3 things happens when 'new' operator is used 
// 1.Creates an empty object. 
// 2. will set 'this' to point to the empty object. 
// 3.will return the said object from the constructor function.

function Circle(radius) {
    this.radius = radius,
    this.draw = () => {
            console.log('draw');
        }
}

const circleOne = new Circle(1)
// console.log(circleOne)

//#IMPORTANT : pick one and stick with it. see the diffrence using contructor function
// console.log(circleOne.constructor)// using circle function
// console.log(car.constructor) //created using in nuilt object funtion 
// console.log(profile1.constructor)//created using in nuilt object funtion

// console.log(circleOne)
circleOne.color = 'yellow';
// console.log(circleOne)
circleOne.color = 'red';
// console.log(circleOne)
delete circleOne.color;
// console.log(circleOne)

// let square = {x:1,y:2} //you cant plainly modify like this if it was const
// console.log(square)
// square = {a: 1,b:2}
// console.log(square)


//#IMMUTABLE OR HARDCODED
let a = 10;
let b = a;
a = 20;
// console.log("a =", a, "b =", b);
//#REFERANCE / OBJECT IS STORED SOMEWHERE IN MEMORY AND ADDRESS IS STORED IN THE VARIABLE'S MEMORY LOCATION.
let c = {age: 10};
let d = c;
c.age = 20;
// console.log("c =", c, "d =", d);
//C AND D SHARE SAME MEMORY LOCATION.

let number = 10;

const increase = (number)=> {
    number++;
}
increase(number);
// console.log(number);



let number1 = {name:"arvind",age: 10}

const increase1 = (obj)=> {
    obj.age++;
}

increase1(number1);
// console.log(number1);

//#IMPORTANT : Primitives are copied by their value. Objects are copied by their reference.

// for (const key in circleOne)
//     console.log(key,circleOne[key])

// for (const key of Object.keys(circleOne))
//     console.log(key);
    
// for (const entry of Object.entries(circleOne))
//     console.log(entry);
    
// ('circle' in circleOne) ? console.log("yes") : console.log("no");

const circleTwo = {};

for (const key in circleOne)
circleTwo[key] = circleOne[key];

// console.log(circleOne, circleTwo)

const circleThree = Object.assign({color:'black'},circleOne); //if no {} notation use it just references the address of 1st object and its same as circleThree = circleOne 
// console.log(circleThree)

const circleFour = {...circleOne,color:'white'};
// console.log(circleFour);

 