// Inheritance
class Person {
  constructor(name, id) {
    // Enter parent constructor
    this.species = "Homo Sapiens";
    this.name = name;
    this.id = id;
  }
  play() {
    console.log("Playing");
  }
}
class Engineer extends Person {
  constructor(name, id) {
    // Enter child constructor
    super(name, id); // to invoke parent class constructor
    // Exixt child constructor
  }
  work() {
    super.play(); // or this.play()
    console.log("Child working");
  }
}
const engObj = new Engineer("Arif", 56);
const ali = new Engineer("ALI");

/** sequence maintain
 * 1. Enter child constructor
 * 2. Enter parent constructor
 * 3. Exixt child constructor
 */
