// Inner Function

function outer() {
  function inner() {
    console.log("I am inner");
  }
  inner();
  console.log("I am outer");
}
outer();
// I am inner
//  I am outer

function num(a, b) {
  function sum() {
    return a + b;
  }
  function sub() {
    return a - b;
  }
  function times() {
    return a * b;
  }
  function div() {
    return a / b;
  }
  return sum() + sub() + times() + div();
}
const result = num(10, 5); // 72

function outer(x, y) {
  function inner(a, b) {
    return a * b + x + y;
  }
  return inner(3, 4);
}

console.log(outer(2, 5));
