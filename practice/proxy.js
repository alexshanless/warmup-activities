//Wrapper

// const withDefaultValue = (target, defaultValue = 0) => {
//   return new Proxy(target, {
//     get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
//   });
// };

// const position = withDefaultValue(
//   {
//     x: 24,
//     y: 24,
//   },
//   0
// );

// console.log(position);

//Hidden properties
// const withHiddenProps = (target, prefix = '_') => {
//   return new Proxy(target, {
//     has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
//     ownKeys: obj => Reflect.ownKeys(obj).filter(p => p.startsWith(prefix)),
//     get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
//   });
// };

// const data = withHiddenProps({
//   name: 'Bold',
//   age: 25,
//   _uid: '1235',
// });

// console.log(data._uid);

//Optimization

// const userData = [
//   { id: 1, name: 'Jack', age: 23 },
//   { id: 23, name: 'Greg' },
// ];

// // const index = {};
// // userData.forEach(i => (index[i.id] = i));

// const IndexedArray = new Proxy(Array, {
//   construct(target, [args]) {
//     const index = {};
//     args.forEach(item => {
//       index[item.id] = item;
//     });

//     return new Proxy(new target(...args), {
//       get(arr, prop) {
//         switch (prop) {
//           case 'push':
//             return item => {
//               index[item.id] = item;
//               arr[prop].call(arr, item);
//             };
//           case 'findById':
//             return id => index[id];
//           default:
//             return arr[prop];
//         }
//       },
//     });
//   },
// });

// const users = new IndexedArray(userData);

// console.log(users);
