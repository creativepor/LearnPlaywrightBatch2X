// 04_HigherOrderFunctions.js
function applyTwice(fn, value) {
  return fn(fn(value));
}

const inc = x => x + 1;
console.log(applyTwice(inc, 3)); // 5
