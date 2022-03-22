function curry(...arg1) {
  return function (...arg2) {
    let sum = arg1.reduce((acc, elm) => acc + elm, 0);
    return arg2.length > 0 ? curry(sum, ...arg2) : sum;
  };
}
