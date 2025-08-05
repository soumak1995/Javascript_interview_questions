const input = {
  a: {
    b: {
      b2: 2,
      b4: 4,
    },
    c: {
      c2: 2,
      c3: 3,
      c4: [1, 2, 3, 4],
    },
  },
};
//output: { 'a.b.b2':2, 'a.c.c2':2, 'a.c.c3':3 ,'a.b.b4':4,'a.c.c4.0':1,'a.c.c4.1':2};

function keyFlatten(prevKey, obj) {
  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
           let temp;
        if (!prevKey) {
          temp = key;
        } else {
          temp = prevKey + "." + key;
        }
      const obj2 = keyFlatten(temp, { ...obj[key] });
      newObj = { ...newObj, ...obj2 };
    } else newObj[prevKey + "." + key] = obj[key];
  }
  return newObj;
}

console.log(keyFlatten("", input));
