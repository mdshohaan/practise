// Closure Function

var name = "irfan";
function sayName() {
  console.log("Hello" + name); // closure
}
sayName();
// another
function greetings(msg) {
  return function (name) {
    console.log(name + msg); // this is closure function
  };
}
var res = greetings("Hello");
res("Irfan");

// Lexical Scope হলো একটি Scope Chain যেখানে একটি inner function তার outer function এর ভ্যারিয়েবল এবং ফাংশন অ্যাক্সেস করতে পারে। কিন্তু outer function ভিতরের inner function এর ভ্যারিয়েবল অ্যাক্সেস করতে পারে না।

// Lexical scope and closure
var num1 = 10;

var sum = function () {
  var num2 = 20;
  return function () {
    return num1 + num2;
  };
};
var myFunc = sum();
// console.log(myFunc()); // 30

// Private property [balance]
function bankAcc(initialBalance) {
  var balance = initialBalance;
  return function () {
    return balance;
  };
}
var myBalance = bankAcc(1000);
console.log(myBalance());

// Closure means - variable that are used in glovally ,but defined in an enclosing scope

(function () {
  var num1 = 20;
  var sum = function () {
    var num2 = 10;
    return num1 + num2;
  };
  console.log(sum);
})();

// Closure Timer
function stopWatch() {
  let startTime = Date.now();
  function getDelay() {
    console.log(Date.now() - startTime);
  }
  return getDelay;
}
let timer = stopWatch();

for (let i = 0; i < 100000; i++) {
  var a = Math.random() * 10000;
}
console.log(timer());

// Async Closure
function async() {
  var a = 20;
  setTimeout(() => {
    console.log(a); // 20
  }, 3000);
}

async();

// another one

function apiFunc(url) {
  fetch(url).then((res) => {
    console.log();
  });
}
apiFunc("https://jsonplaceholder.typicode.com/todos/1");
console.log("I am here");

// Closure scope
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0 1 2
  }, 3000);
}

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 3 3 3
  }, 3000);
}
//  bcz for loop after finished then call setTimeout, also loop value contaion last value 3 then call set time out
