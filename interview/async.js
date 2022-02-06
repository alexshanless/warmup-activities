const first = () => console.log('First');
const second = () => console.log('second');
const third = () => console.log('third');

first();
setTimeout(second, 0);
third();
