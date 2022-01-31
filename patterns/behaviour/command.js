//Command objects allow for loosely coupled systems by separating the objects that issue a request from the objects that actually process the request.
class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue;
  }
  square() {
    return this.num ** 2;
  }
  cube() {
    return this.num ** 3;
  }
}

class Command {
  constructor(subject) {
    this.subject = subject;
    this.commandsExecuted = [];
  }
  execute(command) {
    this.commandsExecuted.push(command);
    return this.subject[command]();
  }
}

const x = new Command(new MyMath(3));

console.log(x.execute('cube'));

console.log(x.commandsExecuted);
