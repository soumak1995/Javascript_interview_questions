const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 100);
});

function myPromiseAll(promises) {
  const result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((res) => {
          result[i] = res;
          if (i === promises.length - 1) resolve(result);
        })
        .catch((err) => reject(err));
    });
  });
}

myPromiseAll([promise, Promise.resolve("world")]).then((value) => {
  console.log(value);
});
