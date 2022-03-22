function addByFour(a) {
  return a + 4;
}

function mulByFour(a) {
  return a * 4;
}

function subByFour(a) {
  return a - 4;
}

const compose = function (...functions) {
  return function (args) {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  };
};
console.log(compose(addByFour, mulByFour, subByFour)(4));
