//Let  + const
let a = 24;
if (true) {
  let a = 42;
}

//Hoisting

// b = 20;

// console.log(b);

// let b = 10;

function hoisted() {
  age = 29;
}

let age;
hoisted();

//Const
const COLOR = "ffaaee";
// COLOR = "000000";

const array = [1, 1, 2, 3, 5, 8];
array.push(13);

const obj = { a: 42 };
obj.name = "Antoine";

//ARROW FUNC
// function sum(a, b) {
//   return a + b;
// }

const sum = (a, b) => a + b;

//Context
function log() {
  console.log(this);
}

const arrowLog = () => console.log(this);

const person = {
  name: "Alex",
  age: 29,
  log: log,
  arrowLog: arrowLog,
  delayLog: function () {
    setTimeout(() => this.name + " " + this.age, 500);
  },
};

person.delayLog();

//DEFAULT PARAMS
const getDefault = (c) => c * 2;

function compute(a = 10, b = getDefault(a)) {
  return a + b;
}

//Strings

const title = "Hello";

const isVisible = () => Math.random > 0.5;

const template = `
${isVisible() ? `<p>Visible<p>` : ""}
<h1 style='color: blue'>${title}<h1>
`;

// console.log(template);

//Methods
const str = "Hello";

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
const address = {
  country: "USA",
  city: "Seattle",
  street: "Broadway",
  toString: function () {
    return Object.keys(this)
      .filter((key) => key !== "toString")
      .map((key) => console.log(this[key]));
  },
  // concat: function () {
  //   return `${this.contry}, ${this.city}, ${this.street}`;
  // },
};

// const { city, country, street, concat: addressConcat } = address;

const { city, ...rest } = address;

console.log(address.toString());

//Methods
/*Object.is()
.assign()
.entries()
.keys()
.values()
*/
