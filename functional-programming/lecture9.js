// Sorting Array
const arr = [100, 5, 78, 3, 8];
arr.sort((a, b) => a - b);
arr;

var people = [
  { name: "HM Nayem", age: 22 },
  { name: "Abir Azim", age: 23 },
  { name: "Jubel Ahmed", age: 18 },
  { name: "Al Rafi", age: 19 },
  { name: "Mr. X", age: 33 },
  { name: "Mr. Y", age: 27 },
];
// sort age
people.sort((a, b) => {
  return a.age - b.age;
});
// sort by Name
people.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

people;

// উপরের কোডকে ternary operator বা localeCompare() ব্যবহার করে ছোট করে লেখা যায়—
// ✔ localeCompare() ফাংশন দুটি স্ট্রিং তুলনা করে এবং স্বয়ংক্রিয়ভাবে -1, 0, বা 1 রিটার্ন করে।
people.sort((a, b) => a.name.localeCompare(b.name));
