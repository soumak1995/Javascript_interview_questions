const obj = {
  result: 0,
  add: function (num) {
    this.result = +num;
    return this;
  },
  mul: function (num) {
    this.result = this.result * num;
    return this;
  },
  value: function () {
    return this.result;
  },
};
console.log(obj.add(2).mul(3).value());
