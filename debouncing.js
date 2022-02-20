let counter = 0;
const getSomething = () => {
  console.log("print something", counter++);
};
const doSomeMagic = function (getSomething, d) {
  let timmer;
  return function () {
    let context = this;
    let arg = arguments;
    clearTimeout(timmer);
    timmer = setTimeout(() => {
      getSomething.apply(context, arg);
    }, d);
  };
};
const betterFunction = doSomeMagic(getSomething, 300);
console.log(doSomeMagic(getSomething, 300)());
console.log(doSomeMagic(getSomething, 300)());
console.log(doSomeMagic(getSomething, 300)());
console.log(doSomeMagic(getSomething, 300)());
