const addTwo = a => a + 2;

const pipe = (...functions) => arg =>
  functions.reduce((accum, func) => func(accum), arg);

const result = pipe(
  addTwo,
  addTwo,
  addTwo
)(10);

console.log("result", result);
