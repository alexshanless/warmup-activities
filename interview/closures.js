// function sayHelloTo(name) {
//   const message = 'Hello' + name;
//   return function () {
//     console.log(message);
//   };
// }

// const helloToBob = sayHelloTo('BOb');
// console.log(helloToBob());

// function createFrameworkManager() {
//   const fw = ['Angular', 'React'];

//   return {
//     print: function () {
//       console.log(fw);
//     },
//     add: function (framework) {
//       fw.push(framework);
//     },
//   };
// }

// const manager = createFrameworkManager();
// console.log(manager);
// manager.print();
// manager.add('VueJS');

// setTimeout

const fib = [1, 2, 3, 5, 8];

for (let i = 0; i < fib.length; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 1500);
  })(i);
}
