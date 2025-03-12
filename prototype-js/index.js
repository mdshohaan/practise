const captain = {
  name: "Mashrafi",
  age: 34,
  country: "Bangladesh",
};
const player = Object.create(captain); // create an object on the basis of captain
// console.log(player);

function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name; // object.property = value;
  person.age = age;
  return Person;
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
console.log(sakib.name);
