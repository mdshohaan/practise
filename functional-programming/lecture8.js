// Closure Function

var name = "irfan";
function sayName() {
  console.log("Hello" + name); // closure
}
sayName();

function greetings(msg) {
  return function (name) {
    console.log(name + msg); // this is closure function
  };
}
var res = greetings("Hello");
res("Irfan");
