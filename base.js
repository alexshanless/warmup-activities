//Numbers
// const num = 54; //float
// const float = 43.43; //float
// const power = 10e3;

/*Number object .
MAX_SAFE_INTEGER
Math.pow()
MIN_SAFE_INTEGER
MAX_VALUE
MIN_VALUE
POSITIVE.INFINITY
NEGATOVE_INFINITY
NaN
isNaN()
isFinite()
parseInt()
parseFloat()
.toFixed()
*/

//BigInt
/* 03454567456345345435n
works only with bigint
*/

//Math
/*
sqrt() square 
pow() power
abs() module
max() max number
min() 
floor() rounds to smaller num
ceil() rounds to larger num
round() to closer integer
trunc() removes float
random() 
*/

//Examples
// function randNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(randNum());

//Strings
/*const name  = 'Alex'
toUpperCase()
toLowerCase()
charAt(2)
indexOf('le')
startsWith()
endsWith()
repeat(3)
trim()
trimLeft()
trimRight()
*/

// function logPerson(s, name, age) {
//   return `${s[0]}${name}${s[1]}${age}`;
// }

// const personName = "alex";
// const personAge = 29;

// const output = logPerson`Name: ${personName},Age: ${personAge}`;

// console.log(output);

//Functions
//Function Declaration
//Function Expression
// const greet2 = function (name) {
//   console.log("hi, " + name);
// };

/*Anonim functions
setInterval(function() {
  console.log(++counter)
},1000)
*/

/* Arrow functions

*/
// const arrow = (name) => {
//   console.log("hi, " + name);
// };

//Default parameters
// const sum = (a, b = 0) => a + b;

// function sumAll(...all) {
//   let result = 0;
//   for (let num of all) {
//     result += num;
//   }
//   return result;
// }

// const res = sumAll(1, 2, 3, 4);
// console.log(res);

// function createMember(name) {
//   return function (lastName) {
//     console.log(name + lastName);
//   };
// }

// const loginWithLastName = createMember("Alex");
// console.log(loginWithLastName("Shan"));

//Arrays
/* push()
unshift()
shift()
pop()
reverse() 
find()
includes()
maps()
filter()
*/

// cars = ["Ford", "Fiat", "Mazda"];

// const upperCars = cars.map((car) => {
//   return car.toUpperCase();
// });

// console.log(upperCars);

// const people = [
//   { name: "Jack", budget: 2340 },
//   { name: "Joe", budget: 4420 },
//   { name: "Glen", budget: 1340 },
// ];

// const allBudget = people
//   .filter((person) => person.budget > 2000)
//   .reduce((acc, person) => {
//     acc += person.budget;
//     return acc;
//   }, 0);

// console.log(allBudget);

//Objects

/*

*/
// const person = {
//   name: "Alex",
//   age: 29,
//   isProgramer: true,
//   greet() {
//     console.log("greetings");
//   },
//   // complex_key: "Complex value",
//   // ["key_" + (1 + 3)]: "Computed key",
// };

// const { name, age } = person;

// // Object.keys(person).forEach((key) => {
// //   console.log("key: ", key);
// //   console.log("value: ", person[key]);
// // });

// const logger = {
//   keys() {
//     console.log(Object.keys(this));
//   },
//   keysAndValues() {
//     Object.keys(this).forEach((key) => {
//       console.log(`"{key}":${this[key]}`);
//     });
//   },

//   withParams(top = false, between = false, bottom = false) {
//     if (top) {
//       console.log("------Start-----");
//     }
//     Object.keys(this).forEach((key, index, array) => {
//       console.log(`"${key}":${this[key]}`);
//       if (between && index !== array.length - 1) {
//         console.log("-------------");
//       }
//     });
//     if (bottom) {
//       console.log("------End-----");
//     }
//   },
// };

// // const bound = logger.keys.bind(person);
// // bound();
// // logger.keys.call(person);
// logger.withParams.call(person, true, true, true);

// ASync
// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait);
// };

// delay(() => {
//   console.log("2 secs");
// }, 2000);

// const delay = (wait = 1000) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, wait);
//   });
// };

// // delay(2500)
// //   .then(() => {
// //     console.log("After 2 seconds");
// //   })
// //   .catch((err) => console.error(err))
// //   .finally(() => console.log("Finally"));
// const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]));

// // getData().then((data) => console.log(data));

// async function asyncExample() {
//   try {
//     await delay(3000);
//     const data = await getData();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// }

// asyncExample();

//DOM
//Events
/*onClick
addEventListener
event.target
*/
