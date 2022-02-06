// const person = {
//   surname: 'Stark',
//   knows: function (what, name) {
//     console.log(`You know ${what}, ${name} ${this.surname} `);
//   },
// };

// const john = { surname: 'Snow' };

// person.knows('everything', 'Bran');

// person.knows.call(john, 'nothing', 'John');
// person.knows.apply(john, ['nothing', 'John']);
// person.knows.bind(john, 'nothing', 'John')();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   console.log(this);
// }

// const greg = new Person('Greg', 30);

// function logThis() {
//   console.log(this);
// }

// const obj = { num: 42 };
// logThis.apply(obj);
// logThis.call(obj);
// logThis.bind(obj)();

// const animal = {
//   legs: 4,
//   logThis: function () {
//     console.log(this);
//   },
// };

// animal.logThis();
