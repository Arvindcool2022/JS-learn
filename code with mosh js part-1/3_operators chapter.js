// objects
let person = {
  name: 'nandini',
};
console.log(person);

person.number = 10;
console.log(person.name, person.number);

person.name = 'arvind';
person['color'] = 'red';
person['number'] = 50;
console.log(person['name'], person['number'], person['color']);

// Array

let colors = ['red', 'blue'];
colors[2] = person;
colors[3] = 3;
console.log(colors);
console.log(colors.pop());
console.log(colors.push('pink'));
console.log(colors);

// function

function exponential(number, power) {
  // weird intraction ?
  // console.log(this);
  return number ** power;
}
console.log(exponential(2, 5));

// arrow function

let expo = (number, power) => {
  // weird intraction ?
  // console.log(this);
  return number ** power;
};
console.log(expo(5, 3));

// increment
console.log(person.number++);
console.log(++person.number);

// ternary

let points = 500;
let pointsNeeded = 100 - points;
let type = points >= 100 ? 'Goldern customer' : 'Silver customer';

function customerType(points, pointsNeeded, type) {
  if (type === 'Goldern customer') {
    console.log('your points are ' + points + ' thus you are a ' + type);
  } else {
    console.log(
      'you are a ' +
        type +
        ', you only need ' +
        pointsNeeded +
        ' to become a Goldern customer'
    );
  }
}

customerType(points, pointsNeeded, type);
