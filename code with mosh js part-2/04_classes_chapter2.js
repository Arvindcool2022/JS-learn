const _age = Symbol();
const _gender = new WeakMap();
const _showDetails = new WeakMap();

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this._age = age < 1 ? this.handleInvalidAge(age) : age; //#symbol method, only parcially private.
    _gender.set(this, gender); //#weakmap method completely private when used with modules.
    _showDetails.set(
      this,
      () => `
name:${this.name}
age: ${this._age}
gender:${_gender.get(this)}`
    );
  }

  get age() {
    return `the age is ${this._age}`;
  }

  set age(age) {
    if (age < 1) return console.error(`${age} is not a valid age`);

    this[_age] = age;
  }
  //!could still set age to negative number through 'objInstance._age = -1;'

  handleInvalidAge(age) {
    throw new Error(`${age} is not a valid age`);
  }
  get gender() {
    return `the gender is ${_gender.get(this)}`;
  }

  get showDetails() {
    return _showDetails.get(this)();
  }

  sayHello() {
    return `Hola, I'm ${this.name}`;
  }

  static parse(jsonFile) {
    let newPersonInstaces = jsonFile.map(
      obj => new Person(obj.name, obj.age, obj.gender)
    );
    return newPersonInstaces;
  }

  //   static parse(jsonFile) {
  //     let newPersonInstaces = [];
  //     jsonFile.forEach(obj => {
  //       newPersonInstaces.push(new Person(obj.name, obj.age, obj.gender));
  //     });
  //     return newPersonInstaces;
  //   }
}

const json = [
  {
    name: 'Alice',
    age: 25,
    gender: 'female'
  },
  {
    name: 'Bob',
    age: 30,
    gender: 'male'
  },
  {
    name: 'Eve',
    age: 22,
    gender: 'female'
  }
];

const personInstances = Person.parse(json);
console.log(personInstances);

const [personInstances1, personInstances2, personInstances3] = [
  ...personInstances
];
console.log(personInstances1);
console.log(personInstances2);
console.log(personInstances3);

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    return 'car is started';
  }
  stop() {
    return 'car is stopped';
  }
  honk() {
    return 'car horn has been honked';
  }
}

class Student extends Person {
  constructor(name, age, gender, studentId) {
    super(name, age, gender);
    this.studentId = studentId;
  }

  sayHello() {
    return `Hola, I'm ${this.name} and ID number is ${this.studentId}`;
  }
}

const per1 = new Person('arvind', 15, 'male');
const per2 = new Person('john', 20, 'male');
const per3 = new Person('jane', 15, 'female');

const car1 = new Car('maruthi', 'swift', 2015);
const car2 = new Car('chevy', 'cruise', 2013);
const car3 = new Car('tata', 'tiago', 2021);

const stu1 = new Student('smith', 12, 'male', 200203001);
const stu2 = new Student('samantha', 15, 'female', 200203001);
const key = Object.getOwnPropertySymbols(stu1)[0]; // now we can change the private properties
