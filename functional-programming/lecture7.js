// Return A Function From Another Function

function host() {
  console.log("I am Host Function");
  return function () {
    console.log("I am Inner");
  };
}
host()();
