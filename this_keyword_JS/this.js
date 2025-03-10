/**
 *  implicit binding
 *  explicit binding
 *  new binding
 *  window binding
 */

// IMPLICIT BINDING
const Sakib = {
  name: "Sakib",
  age: 23,
  printPalyerName: function () {
    console.log(this.name);
  },
};
// Sakib.printPalyerName();

// Dynamic Object Create
var printPalyerNameFunction = function (obj) {
  obj.printPalyerName = function () {
    console.log(this.name);
  };
};
var sakib = {
  name: "Sakib",
  age: 23,
};
// printPalyerNameFunction(sakib);
// sakib.printPalyerName();

var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
    father: {
      name: "Mr XXX",
      printName: function () {
        console.log(this.name);
      },
    },
  };
};
var sakib = Person("Sakib", 35);
sakib.printName();
sakib.father.printName();
