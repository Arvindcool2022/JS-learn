const cricketPlayers = [
  { firstName: 'sachin', lastName: 'tendulkar', age: 50 },
  { firstName: 'rahul', lastName: 'dravid', age: 50 },
  { firstName: 'virat', lastName: 'kolhi', age: 30 },
  { firstName: 'ravi', lastName: 'sashthiri', age: 80 },
  { firstName: 'virendra', lastName: 'sehwag', age: 52 },
  { firstName: 'kapil', lastName: 'dave', age: 80 }
];

//* map()
//# to transform an array and get a new array.
//# if you want to create a newArray independent of orginalArray. Otherwise use forEach or ForOf to change(mutate) the originalArray

const calculateArea = arr => arr.map(x => Math.PI * x * x);

const fullName = cricketPlayers.map(x => x.firstName + ' ' + x.lastName);

//* filter()
//# to filter an array and get a new array (we a conditional to check and only if true the value will be returned to new array)

const Greaterthan4 = arr => arr.filter(x => x > 4);

const ageAbove50 = cricketPlayers.filter(x => x.age > 50);

//* reduce()
//#when we want a single value from an array.

const sameAge = cricketPlayers.reduce((a, c) => {
  a[c.age] ? ++a[c.age] : (a[c.age] = 1);
  return a;
}, {});

const sameAge1 = cricketPlayers.reduce((acc, player) => {
  if (acc[player.age]) ++acc[player.age];
  else acc[player.age] = 1;

  return acc;
}, {});

console.log(sameAge);
console.log(sameAge1);

//* CHAINING

const firstNameAbove50 = cricketPlayers
  .filter(x => x.age > 50)
  .map(x => x.firstName);

const firstNameAbove50Reduce = cricketPlayers.reduce((a, c) => {
  if (c.age > 50) a.push(c.firstName);
  return a;
}, []);
