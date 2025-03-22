// Return A Function From Another Function

// function host() {
//   console.log("I am Host Function");
//   return function () {
//     console.log("I am Inner");
//   };
// }
// here same to same output
function host() {
  console.log("I am Host Function");
  function child() {
    console.log("I am Inner");
  }
  return child;
}
host()();
// Another
function greetings(msg) {
  return function (name) {
    console.log(name + msg);
  };
}
greetings("Hello")("Irfan");
