// // const Animal = function (options) {
// //   this.name = options.name;
// //   this.color = options.color;
// // };

// // // Animal.prototype.age = 3;

// // const dog = new Animal({ name: 'Rex', color: 'black' });

// // const Cat = function (...args) {
// //   Animal.apply(this, args);
// // };

// class Animal {
//   constructor(options) {
//     this.name = options.name;
//     this.color = options.color;
//   }

//   voice() {
//     console.log(`Voice from ${this.name}`);
//   }
// }

// const dog = new Animal({ name: 'Rock', color: 'black' });

// class Cat extends Animal {
//   constructor(options) {
//     super(options);
//     this.hasTail = options.hasTail;
//     this.type = 'cat';
//   }

//   voice() {
//     super.voice();
//     console.log(`${this.name} said meow`);
//   }
// }

// const cat = new Cat({ name: 'Kittie', color: 'tabi', hasTail: true });

// //Examples
// Object.prototype.print = function () {
//   console.log(`I am object`, this);
// };

// cat.print();
