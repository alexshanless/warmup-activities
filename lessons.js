//!Prototype

// const person = {
//   name: "Alex",
//   age: 29,
//   greet: function () {
//     console.log("Greet");
//   },
// };

// const person = new Object({
//   name: "Alex",
//   age: 29,
//   greet: function () {
//     console.log("Greet");
//   },
// });

// Object.prototype.sayHello = function () {
//   console.log("Hello");
// };

// const newPerson = Object.create(person);
// newPerson.name = "Elena";

//!This call bind apply
// function hello() {
//   console.log("hello", this);
// }

// const person = {
//   name: "Ant",
//   age: 35,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(this),
//   logInfo: function (job, phone) {
//     console.group(`${this.name} info: `);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);

//     console.groupEnd();
//   },
// };

// const newPers = {
//   name: "zh",
//   age: 99,
// };

// person.logInfo.bind(newPers, "front", "111-111")();
// person.logInfo.call(newPers, "front", "111-111");
// person.logInfo.apply(newPers, ["front", "111-111"]);

const array = [1, 2, 3, 4, 5];

Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

console.log(array.multBy(10));
