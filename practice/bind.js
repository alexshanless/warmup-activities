const person = {
  name: 'Brad',
};

function info(phone) {
  console.log(` Name ${this.name}, Number: ${phone}`);
}

// info.bind(person)('1243254');

function bind(fn, context, ...rest) {
  return function (...args) {
    const uniqId = Math.floor(Date.now().toString() * Math.random());
    context[uniqId] = fn;
    const result = context[uniqId](...rest.concat(args));
    return result;
  };
}

bind(info, person, '1234')();
bind(info, person)('1234');
