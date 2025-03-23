// Filter Method
const arr = [3, 4, 6, 79, 2];

var newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    newArr.push(arr[i]);
  }
}
//  console.log(newArr);

// ALternative
const newArr2 = arr.filter((value) => {
  return value % 2 === 1;
});
// console.log(newArr2);  3 79

// break down the Filter Array
function myFilter(arr, cb) {
  var filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}
myArray = myFilter(arr, (val) => {
  return val % 2 === 1;
});
myArray; // [ 3, 79 ]
