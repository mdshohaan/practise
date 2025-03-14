// For of loop -iteration through value
let str = "javascript";
let size = 0;
for (const i of str) {
  // console.log("i", i);
  size++;
}
// console.log(size); // 10

// For in Loop -iteration through  key
const obj = {
  name: "arif",
  age: 12,
  cgpa: 3.4,
};
//  Return the object key and value
for (let key in obj) {
  console.log(key, obj[key]);
}
