// Default set prototype
const employee = {
  calcTax() {
    console.log("Tax rate is 10%");
  },
};
const arif = {
  salary: 2000,
  calcTax() {
    console.log("Tax rate is 20%");
  },
};
const arif2 = {
  salary: 2000,
};
arif.__proto__ = employee;
arif2.__proto__ = employee;

/**
 *  JS object have a special property called prototype.
 *  if object and prototype have same method then object method will be used.
 */
