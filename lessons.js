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

// const array = [1, 2, 3, 4, 5];

// Array.prototype.multBy = function (n) {
//   return this.map(function (i) {
//     return i * n;
//   });
// };

// console.log(array.multBy(10));

//!Closures

// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }

// const calc = createCalcFunction(42);
// calc();

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenerator("com");
// console.log(comUrl("google"));

// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args);
//   };
// }

//Objects

// const person = Object.create(
//   {},
//   {
//     name: {
//       value: "Bob",
//     },
//   },
//   {
//     age: {
//       value: 6,
//     },
//   }
// );

// for (key in person) {
//   console.log(key);
// }

//ES6 Classes
// class Animal {
//   static type = "ANIMAL";
//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }
// }

// // const animal = new Animal({
// //   name: "animal",
// //   age: 5,
// //   hasTail: true,
// // });

// class Cat extends Animal {
//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }

//   get ageInfo() {
//     return this.age * 7;
//   }
//   set ageInfo(newAge) {
//     this.age = newAge;
//   }
// }

// const cat = new Cat({
//   name: "Pushok",
//   age: 5,
//   hasTail: true,
//   color: "tabi",
// });
// console.log(cat.ageInfo);

// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }

//   hide() {
//     this.$el.style.display = "none";
//   }
//   show() {
//     this.$el.style.display = "block";
//   }
// }

// class Box extends Component {
//   constructor(options) {
//     super(options.selector);
//     this.$el.style.width = this.$el.style.height = options.size + "px";
//     this.$el.style.background = options.color;
//   }
// }

// const box1 = new Box({
//   selector: "#box1",
//   size: 100,
//   color: "black",
// });

// class Circle extends Box {
//   constructor(options) {
//     super(options);
//     this.$el.style.borderRadius = "50%";
//   }
// }

// const c = new Circle({
//   selector: "#circle",
//   size: 50,
//   color: "green",
// });

// Async
// console.log("start");

// setTimeout(() => {
//   console.log("timeout");
// }, 0);
// console.log("end");

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing data");
//     const serverData = {
//       server: "aws",
//       port: "2000",
//       status: "201",
//     };
//     resolve(serverData);
//   }, 2000);
// });

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//     }, 2000);
//   }).then((clientData) => {
//     console.log("Data received", clientData);
//   });
// });
