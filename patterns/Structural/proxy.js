//Less requests to the server
function networkFetch(url) {
  return `${url} - Server's respond`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];
    if (cache.has(url)) {
      return `${url} from cache`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  },
});

console.log(proxiedFetch('react.com'));
console.log(proxiedFetch('react.com'));
