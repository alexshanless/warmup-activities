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
    setTimeout(() => console.log(this.name + " " + this.age), 500);
  },
};

person.delayLog();
