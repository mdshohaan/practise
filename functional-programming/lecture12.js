// Map Function
const arr = [1, 2, 3, 4, 5, 6];
const newMap = [];
for (let i = 0; i < arr.length; i++) {
  newMap.push(arr[i] + 2);
}
newMap;

// Break down map function
function myMap(arr, cb) {
  let newMap = [];
  for (let i = 0; i < arr.length; i++) {
    newMap.push(cb(arr[i]));
  }
  return newMap;
}
const changeMap = myMap(arr, (value) => {
  return value + 2;
});
changeMap;
