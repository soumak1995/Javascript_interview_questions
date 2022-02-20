const arr = [
  [1, 2],
  [3, 4],
  [5, [6, 7], 8],
];
console.log(arr.flat(2));

function myFlat(array, depth = 1) {
  let result = [];
  array.forEach((arr) => {
    if (Array.isArray(arr) && depth > 0) {
      result.push(...myFlat(arr, depth - 1));
    } else return result.push(arr);
  });
  return result;
}

console.log(myFlat(arr, 2));
