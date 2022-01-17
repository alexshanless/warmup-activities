//Let  + const
// let a = 24;
// if (true) {
//   let a = 42;
// }

//Hoisting

// b = 20;

// console.log(b);

// let b = 10;

// function hoisted() {
//   age = 29;
// }

// let age;
// hoisted();

// //Const
// const COLOR = "ffaaee";
// // COLOR = "000000";

// const array = [1, 1, 2, 3, 5, 8];
// array.push(13);

// const obj = { a: 42 };
// obj.name = "Antoine";

//ARROW FUNC
// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => a + b;

// //Context
// function log() {
//   console.log(this);
// }

// const arrowLog = () => console.log(this);

// const person = {
//   name: "Alex",
//   age: 29,
//   log: log,
//   arrowLog: arrowLog,
//   delayLog: function () {
//     setTimeout(() => this.name + " " + this.age, 500);
//   },
// };

// person.delayLog();

// //DEFAULT PARAMS
// const getDefault = (c) => c * 2;

// function compute(a = 10, b = getDefault(a)) {
//   return a + b;
// }

// //Strings

// const title = "Hello";

// const isVisible = () => Math.random > 0.5;

// const template = `
// ${isVisible() ? `<p>Visible<p>` : ""}
// <h1 style='color: blue'>${title}<h1>
// `;

// // console.log(template);

// //Methods
// const str = "Hello";

// console.log(str.startsWith("H"));
// console.log(str.endsWith("o"));
// console.log(str.trimEnd());
// console.log(str.padStart(10));

//REST SPREAD
// function average(arr) {
//   return arr.reduce((acc, i) => (acc += i), 0) / arr.length;
// }

// console.log(average([10, 20, 30, 40]));

// const array = [1, 2, 3, 5, 8];
// const [a, , c] = array;

//Objects
// const address = {
//   country: "USA",
//   city: "Seattle",
//   street: "Broadway",
//   toString: function () {
//     return Object.keys(this)
//       .filter((key) => key !== "toString")
//       .map((key) => console.log(this[key]));
//   },
//   // concat: function () {
//   //   return `${this.contry}, ${this.city}, ${this.street}`;
//   // },
// };

// // const { city, country, street, concat: addressConcat } = address;

// const { city, ...rest } = address;

// console.log(address.toString());

//Methods
/*Object.is()
.assign()
.entries()
.keys()
.values()
*/

//CLasses

// class Person {
//   constructor(name) {
//     type = "human";
//     this.name = name;
//   }
// }

// class Programmer extends Person {
//   constructor(name, job) {
//     super(name);

//     this._job = job;
//   }
// }

//Symbols
// const symbol = Symbol("demo");
// const other = Symbol("demo");

// const obj = {
//   name: "Elle",
//   [symbol]: "meta",
// };

//Generators
// let array = [1, 2, 3, 4];
// const str = "Hello";

// console.log(array[Symbol.iterator]);

// function* gen(num = 4) {
//   for (let i = 0; i < num; i++) {
//     try {
//       yield i;
//     } catch (e) {
//       console.log("Error", e);
//     }
//   }
// }

//Promises
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 500);
// });

// promise.then((data) => console.log(data));

// const delay = (ms) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Done"), ms);
//   });

// // delay(1000)
// //   .then((data) => delay(500))
// //   .then((data) => console.log(data));

// async function asyncDelay() {
//   const data = await delay(2000);
// }

//MAP_SET
// const map = new Map([["a", 1]]);

//REFLECTS
// class Student {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hi! My name is ${this.name}`);
//   }
// }

// const student = Reflect.construct(Student, ["Max"]);

/*.apply()
ownKeys()
preventExtensions()
isExtensible()
*/
