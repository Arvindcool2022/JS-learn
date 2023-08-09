class Person {
  constructor(x) {
    this.name = x;
  }

  selfIntro() {
    console.log(`Hi, I'm ${this.name}`);
  }
  // person.prototype.selfIntro = function () {
  //   console.log(`Hi, I'm ${name}`);
  // }; //#same
}

class Professor extends Person {
  // function extend(Child, Parent) {
  // //#intermediate function inhertance.
  //   Child.prototype = Object.create(Parent.prototype);
  //   Child.prototype.constructor = Child;
  // } //# same
  teaches;

  constructor(a, b) {
    super(a);
    this.teaches = b;
  }
  //   professor.prototype = Object.create(Person.prototype);
  //   professor.prototype.constructor = professor;
  //   //#same
  selfIntro() {
    console.log(
      `Hello, I'm ${this.name}, a Professsor and I teach ${this.teaches}`
    );
  }
}

let per = new Person('arvind');
per.selfIntro();
let prof = new Professor('john', 'maths');
prof.selfIntro();
