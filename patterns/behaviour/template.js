class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibilities() {}

  work() {
    return `${this.name} doing ${this.responsibilities}`;
  }

  getPaid() {
    return `${this.name} getting ${this.salary}`;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
  responsibilities() {
    return 'building programs';
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
  responsibilities() {
    return 'testing programs';
  }
}

const dev = new Developer('Greg', 100000);
console.log(dev.getPaid());
console.log(dev.work());
