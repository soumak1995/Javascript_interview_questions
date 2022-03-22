const arr = [1, 2, 3, 4, 5, 6, 7];
forEach((currentelm, index, arr) => {});

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
arr.myForEach((elm) => console.log(elm));

//Array.map((currentelm,index,arr)=>{})

Array.prototype.myMap = function (callback) {
  const myArr = [];
  for (let i = 0; i < this.length; i++) {
    myArr.push(callback(this[i], i, this));
  }
  return myArr;
};
console.log(arr.myMap((el) => el * 4));

//Array.filter((currentelm,index,arr)=>{})

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push(this[i]);
  }
  return result;
};
console.log(arr.myFilter((el) => el > 3));

//Array.find((currentelm,index,arr)=>{})

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return this[i];
  }
};
console.log(arr.myFind((el) => el === 3));

//Array.reduce((acc,currentelm,index,arr)=>{},[])
Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue || this[0];
  for (let i = 1; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

console.log(arr.myReduce((acc, el) => acc + el, 0));

//polyfill for bind
const person = {
  firstName: "Soumak",
  lastName: "Maji",
};
const printName = function (city, state) {
  console.log(
    `my name is ${this.firstName} ${this.lastName} from city ${city} state ${state}`
  );
};
Function.prototype.mybind = function (...args) {
  let params = args.slice(1);
  context = this;
  return function (...args2) {
    return context.apply(args[0], [...params, ...args2]);
  };
};

printName.mybind(person, "kolkata")("wb");
//------------------ Promise.allSettled  ----------------------------------//

if (!Promise.allSettled) {
  const rejectHandler = (reason) => ({ status: "rejected", reason });

  const resolveHandler = (value) => ({ status: "fulfilled", value });

  Promise.allSettled = function (promises) {
    const convertedPromises = promises.map((p) =>
      Promise.resolve(p).then(resolveHandler, rejectHandler)
    );
    return Promise.all(convertedPromises);
  };
}
