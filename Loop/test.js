// test-1
let gameNumb = 20;
let check = prompt("Plz Enter the Correct Number");

while (gameNumb != check) {
  check = prompt("Try again plz");
}
console.log("congats solved");

// prompt return strings .thats why dont use double equal (==)
