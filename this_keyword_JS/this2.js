// explicit binding

var printName = function () {
  console.log(`${this.name} is a ${v1} also ${v2} in ${v3}`);
};

var sakib = {
  name: "Sakib",
  age: 25,
};
var v1 = "BestPlayer",
  v2 = "AllRounder",
  v3 = "Bangladesh";

printName.call(sakib, v1, v2, v3);

var v = [v1, v2, v3];
printName.apply(sakib, v); // call did not pass array thats why, use 'apply'

const newFunc = printName.bind(sakib, v1, v2, v3); // bind creates an instance only,not to call
newFunc();
