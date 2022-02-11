// //Single Responsibility Principle

// class News {
//   constructor(title, text) {
//     this.title = title;
//     this.text = text;
//     this.modified = false;
//   }

//   update(text) {
//     this.text = text;
//     this.modified = true;
//   }
// }

// class NewsPrinter {
//   constructor(news) {
//     this.news = news;
//   }
//   html() {
//     return `
//           <div class='news'>
//            <h1>${this.title}</h1>
//            <p>${this.text}</p>
//            </div>
//            `;
//   }
// }

// const printer = new NewsPrinter(new News('some', 'news'));

// console.log(printer.html());

//Open Close Principle
// class Shape {
//   area() {
//     throw new Error('Area not defined ');
//   }
// }

// class Rect extends Shape {
//   constructor(size) {
//     super();

//     this.size = size;
//   }

//   area() {
//     return this.size ** 2;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   area() {
//     return this.radius ** 2 * Math.PI;
//   }
// }

// class AreaCalculator {
//   constructor(shapes = []) {
//     this.shapes = shapes;
//   }

//   sum() {
//     return this.shapes.reduce((acc, shape) => {
//       acc += shape.area();
//       return acc;
//     }, 0);
//   }
// }

// const calc = new AreaCalculator([new Rect(10), new Circle(15)]);

// console.log(calc.sum());

// //Liskov substition principle

// class Person {}

// class Member extends Person {
//   access() {
//     console.log('You have access');
//   }
// }

// class Guest extends Person {
//   isGuest = true;
// }

// class FrontEnd extends Member {
//   canCreateFront() {}
// }

// class Backend extends Member {
//   canCreateBack() {}
// }

// class GuestMem extends Guest {
//   access() {
//     throw new Error('No access');
//   }
// }

// function openSecretDoor(person) {
//   person.access();
// }

// openSecretDoor(new FrontEnd());
// openSecretDoor(new GuestMem());

//Interface segregation principle

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     console.log(`${this.name} can walk`);
//   }
//   swim() {
//     console.log(`${this.name} can swim`);
//   }
//   fly() {
//     console.log(`${this.name} can fly`);
//   }
// }

// class Dog extends Animal {
//   fly() {
//     return null;
//   }
// }
// class Eagle extends Animal {
//   swim() {
//     return null;
//   }
// }
// class Whale extends Animal {
//   walk() {
//     return null;
//   }
//   fly() {
//     return null;
//   }
// }

// const eagle = new Eagle('Jim');
// const whale = new Whale('Jessica');

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const swimer = {
//   swim() {
//     console.log(`${this.name} can swim`);
//   },
// };

// const flier = {
//   fly() {
//     console.log(`${this.name} can fly`);
//   },
// };
// const walker = {
//   walk() {
//     console.log(`${this.name} can walk`);
//   },
// };

// class Dog extends Animal {}
// class Eagle extends Animal {}
// class Whale extends Animal {}

// const dog = new Dog('Rex');

// Object.assign(Dog.prototype, walker, swimer);

// dog.walk();
// dog.fly();

//Dependency inversion principle

class Fetch {
  request(url) {
    return fetch(url).then(res => res.json);
  }
}

class Database {
  constructor() {
    this.fetch = new Fetch();
  }
  getData() {
    return this.fetch.request('google.com');
  }
}
