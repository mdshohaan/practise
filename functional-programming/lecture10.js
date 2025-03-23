// ForEach Function
const arr = [3, 4, 6, 79, 2];
// arr.forEach((i) => {
//   console.log(i);
// });

function loop(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

loop(arr, (ele) => {
  console.log(ele);
});
