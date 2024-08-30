function getUserId(id, callback) {
  const randomRequestTime = Math.floor(Math.random() * 100);
  setTimeout(() => {
       callback("user" + id);
  }, randomRequestTime);
}

function mapLimit(input, limit, iterationFn, callback) {
  let responses = [];
  let completedTask = 0;
  let index = 0;
  function postCompleteCallback(activeIndex, output) {
    responses[activeIndex] = output;
    completedTask += 1;

    if (completedTask === input.length) {
      callback(responses);
      return;
    }
    if (index < input.length) {
      iterationFn(input[index], postCompleteCallback.bind(null, index));
      index += 1;
    }
  }
  while (index < limit) {
    iterationFn(input[index], postCompleteCallback.bind(null, index));
    index+=1;
  }
}

mapLimit([1, 2, 3, 4, 5], 2, getUserId, (allResults) => {
  console.log(allResults);
});
