const prtintSomething = () => {
  console.count("browser resize!!");
};
const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
const betterFunction = throttle(prtintSomething, 300);
window.addEventListener("resize", betterFunction);
const normalFunc = () => {
  console.count("Normal Function");
};

window.addEventListener("resize", normalFunc);
