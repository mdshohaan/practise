// Higher Order Function

var arr = [1, 2, 3, 4, 5];
function cbf(a) {
  console.log(a);
}
arr.forEach(cbf);

function caller() {
  return function (name) {
    return "My name is " + name;
  };
}
const res = caller()("irfan");
res;
