//Numbers
// const num = 54; //float
// const float = 43.43; //float
// const power = 10e3;

/*(Number object .
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
