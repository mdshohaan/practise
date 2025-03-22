// Callback Function

// argument pass
// function hello(name) {
//   print(name);
//   print("Islam");
// }
// function print(args) {
//   console.log(args);
// }
// hello("Irfan");

// callback
function hello(name, check) {
  check(name);
}

hello("Irfan", function (name) {
  console.log("Hi " + name);
});
// 📌 ধাপে ধাপে বোঝা যাক:
// 1️⃣ hello("Irfan", function (name) {...}); → hello ফাংশন কল হলো।
// 2️⃣ name = "Irfan" এবং check = function (name) {...}
// 3️⃣ check(name); কল হলো, যা এই ফাংশনকে এক্সিকিউট করবে:

hello("Irfan", (name) => {
  console.log(name);
});

// another callback
let me = {
  name: "Irfan",
  age: 23,
  email: "abc@gmail.com",
};
function mySelf(person, callback) {
  console.log(person);
  if (person.age >= 18) {
    callback(person.email);
  }
}
mySelf(me, function (email) {
  console.log(email);
});
