const obj = {
  name: "ABC",
  show: function () {
    return this.name;
  },
};

const obj_1 = {
  name: "pqrs",
};

const showfun = obj.show;
console.log(showfun.bind(obj_1)());
