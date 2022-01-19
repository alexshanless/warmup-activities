// const person = {
//   name: "Alex",
//   age: 29,
//   greet: function () {
//     console.log("Greet");
//   },
// };

const person = new Object({
  name: "Alex",
  age: 29,
  greet: function () {
    console.log("Greet");
  },
});

Object.prototype.sayHello = function () {
  console.log("Hello");
};

const newPerson = Object.create(person);
newPerson.name = "Elena";
