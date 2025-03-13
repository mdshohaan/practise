// Covert to class object from index.js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.contact = "012352";
  }
  play() {
    console.log("Person is Playing");
  }
  sleep() {
    console.log("Person is Sleeping");
  }
}
const sakib = new Person("Sakib", 35);
console.log(sakib.contact);
console.log(sakib.play());
