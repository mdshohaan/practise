/**
 * First Class Function
 */

function sayName(name) {
  return "hello " + name;
}

// 1. A Function can be stored in a variable

var hello = sayName; //  [Function: sayName]  this is called referrence pass
var res = hello("Sohan"); //  hello Sohan
var fun = sayName("Irfan");

// 2. A Function can be stored in an Array

var arr = [1, 2, 3, 4];
arr.push(hello); // [ 1, 2, 3, 4, [Function: sayName] ]

// 3. A Function can be stored as an Object Field or Property

var person = {
  name: "Irfan",
  fun: hello,
  fun1: sayName,
}; // { name: 'Irfan', fun: [Function: sayName], fun1: [Function: sayName] }

// 4.We can create function as needed

var sum =
  10 +
  (function () {
    return 50;
  })(); // 60

//  5. We can pass a function as an argument

function wow(name, fun) {
  return fun(name);
}
const res1 = wow("MD", sayName); // hello MD

// We can return function from another function

function base(b) {
  return function (n) {
    var result = 1;
    for (let i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}
var power = base(2); // [Function (anonymous)]
var results = power(10); // 100

// •	power(10) মানে base(2)(10)
// •	এখানে n = 10 এবং b = 2 (কারণ base(2) তে b সংরক্ষিত ছিল)।
// •	লুপ ২ বার চলবে (b = 2), এবং result আপডেট হবে—

// Loop Execution:
// 1.	প্রথম লুপ (i = 0): result = 1 * 10 = 10
// 2.	দ্বিতীয় লুপ (i = 1): result = 10 * 10 = 100

// •	শেষে result = 100 রিটার্ন করবে।
