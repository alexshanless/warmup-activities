//Allows to request to the same object some operations and then modify them

class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue;
  }
  add(value) {
    this.sum += value;
    return this;
  }
}

const sum1 = new MySum();
console.log(sum1.add(8).add(23).sum);
