function outer() {
  x = 10;
  function inner() {
    console.log(x);
  }
  x=20;
  return inner
}
var innerfunc = outer()
console.log(innerfunc());
