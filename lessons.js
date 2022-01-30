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

// Async await

// const delay = (ms) => {
//   return new Promise((r) =>
//     setTimeout(() => {
//       r();
//     }, ms)
//   );
// };

// const url = "https://jsonplaceholder.typicode.com/todos";

// async function fetchTodos() {
//   try {
//     await delay(2000);
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetchTodos();

//Fetch, XHR, Ajax
// const url = "https://jsonplaceholder.typicode.com/users";

// // function sendRequest(method, url, body = null) {
// //   return new Promise((resolve, reject) => {
// //     const xhr = new XMLHttpRequest();

// //     xhr.open(method, url);
// //     xhr.responseType = "json";
// //     xhr.setRequestHeader("Content-Type", "applicatio-json");

// //     xhr.onload = () => {
// //       if (xhr.status >= 400) {
// //         resolve(xhr.response);
// //       } else {
// //         reject(xhr.response);
// //       }
// //     };

// //     xhr.onerror = () => {
// //       reject(xhr.response);
// //     };

// //     xhr.send(JSON.stringify(body));
// //   });
// // }
// function sendRequest(method, url, body = null) {
//   const headers = {
//     "Content-Type": "application/json",
//   };
//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers,
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     return response.json().then((err) => {
//       const e = new Error("error");
//       e.data = error;
//       throw e;
//     });
//   });
// }

// // sendRequest("GET", url)
// //   .then((data) => console.log(data))
// //   .catch((err) => console.log(err));

// sendRequest("POST", url, {
//   name: "Bob",
//   age: 1,
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// //Destruct

// function calcValues(a, b) {
//   return [a + b, a - b];
// }

//Proxy

// const person = {
//   name: "Bob",
//   age: 24,
//   job: "NPC",
// };

// const op = new Proxy(person, {
//   get(target, prop) {
//     return target[prop];
//   },
//   set(target, prop, value) {
//     if (prop in target) {
//       target[prop] = value;
//     } else {
//       throw new Error(`No ${prop} field in target`);
//     }
//   },
//   has(target, prop) {
//     return ["age", "name", "job"].includes(prop);
//   },
//   deleteProperty(target, prop) {
//     console.log("Deleting...", prop);
//     delete target[prop];
//   },
// });

// const log = (text) => `Log: ${text}`;

// const fp = new Proxy(log, {
//   apply(target, thisArg, args) {
//     return target.apply(thisArg, args).toUpperCase();
//   },
// });

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age;
//   }
// }

// const PersonProxy = new Proxy(Person, {
//   construct(target, args) {
//     return new target(...args);
//   },
// });

//MAP, SET, WeakMap, Set
// const entries = [
//   ["name", "Alex"],
//   ["age", 29],
//   ["job", "Fullstack"],
// ];

// // console.log(Object.entries(obj));
// // console.log(Object.fromEntries(entries));

// const map = new Map(entries);

// // console.log(map.get("job"));

// // for (let [key, value] of map) {
// //   console.log(key, value);
// // }

// const users = [{ name: "Gru" }, { name: "Bru" }, { name: "Wru" }];

// const visits = new Map();

// visits
//   .set(users[0], new Date())
//   .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//   .set(users[2], new Date(new Date().getTime() + 5000 * 60));

// function lastVisit(user) {
//   return visits.get(user);
// }

// const set = new Set([1, 2, 3, 3, 4, 5, 5, 5, 6]);

// // console.log(set.keys());

// function uniqValues(array) {
//   return [...new Set(array)];
// }

// console.log(uniqValues([1, 1, 1, 2, 2, 2]));

// let obj = { name: "weakmap" };

// const map = new WeakMap([[obj, "obj data"]]);

//get set delete has - All methods of WeakMap
