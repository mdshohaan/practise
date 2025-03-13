const captain = {
  name: "Mashrafi",
  age: 34,
  country: "Bangladesh",
};
const player = Object.create(captain); // create an object on the basis of captain
// console.log(player);

function Person(name, age) {
  // let this = Object.create(Person.prototype);
  this.name = name; // object.property = value;
  this.age = age;
  this.contact = "012352";
  // return this;
}

Person.prototype = {
  play() {
    console.log("Person is Playing");
  },
  sleep() {
    console.log("Person is Sleeping");
  },
};

const sakib = new Person("Sakib", 35);
console.log(sakib.contact);
console.log(sakib.play());
