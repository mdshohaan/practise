//  Return Statement

function check(firstName, lastName, gender) {
  if (gender === "male") {
    return "Mr" + firstName + lastName;
  } else if (gender === "female") {
    return "Mrs" + firstName + lastName;
  }
}
const res = check("Irfanul", "Islam", "male");
res;

// return from
function example() {
  return {
    name: "Irfan",
    age: 23,
    print: function () {
      console.log("fully return");
    },
  };
}

const result = example();
result.print();

// Never return something on a new line without using parentheses

function foo() {
  return 1;
}
const output = foo();
output;
