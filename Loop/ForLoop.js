// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 1;
let len = cars.length;
let text = "";

for (; i < len; i++) {
  text += cars[i] + "<br>";
  console.log(i);
}
