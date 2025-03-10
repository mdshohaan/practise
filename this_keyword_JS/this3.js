//  new Binding

function Person(name, age) {
  // let this = Object.create(null)
  this.name = name;
  this.age = age;
  console.log(`${this.name} and ${this.age}`);
  // return this
}
const sakib = new Person("Sakib", 45);
