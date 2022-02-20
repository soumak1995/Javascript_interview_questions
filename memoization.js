//--------------------------------------------------------------------------------------------//
function memoization() {
  const cache = {};
  return function (num) {
    if (num in cache) {
      console.log("cached value");
      return cache[num];
    } else {
      cache[num] = num + 10;
      return cache[num];
    }
  };
}
var memoizedFunc = memoization();
memoizedFunc(20); //
memoizedFunc(20); //

//----------------------------------------------------------------------------------------------//

function memoization(fn, context) {
  const res = {};
  return function (...args) {
    const argCache = JSON.stringify(args);
    if (!res[argCache]) {
      res[argCache] = fn.apply(context || this, args);
    }
    return res[argCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 10000; i++) {}
  return num1 * num2;
};
const memo = memoization(clumsyProduct);
console.log(memo(8, 9));
//---------------------------------//
function addNum(a, b) {
  return a + b;
}

function addMemo(fn) {
  const cache = {};
  return function (a, b) {
    let key = "" + a + "" + b;
    if (key in cache) {
      console.log("from cache", cache);
      return cache[key];
    }
    cache[key] = fn(a, b);
    return cache[key];
  };
}

let memo = addMemo(addNum);
console.log(memo(1, 2));
console.log(memo(1, 2));

//add(1).mul(2).add(7).value()
