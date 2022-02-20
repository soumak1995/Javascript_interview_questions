Function.prototype.myBind = function (...args) {
  let params = args.slice(1);
  let context = this;
  return function (...args_2) {
    return context.apply(args[0], [...params, ...args_2]);
  };
};

const square = {
  side: 5,
  getArea: function () {
    return this.side * this.side;
  },
};
const square_1 = {
  side: 4,
};
const getAreaFun = square.getArea;
const res = getAreaFun.myBind(square_1);
console.log(res());

function throttale(fn, d) {
  let flag = true;
  return function (...args) {
    let context = this;
    if (flag) {
      fn.apply(context, [...args]);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, d);
    }
  };
}

function logName(name) {
  console.log(name);
}
ThrottaledLogName = throttale(logName, 1000);
ThrottaledLogName("A");
ThrottaledLogName("AB");
ThrottaledLogName("ABC");
