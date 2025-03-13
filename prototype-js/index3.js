class Person {
  constructor(name) {
    this.species = "Homo Sapiens";
    this.name = name;
  }
  play() {
    console.log("Playing");
  }
}
class Engineer extends Person {
  constructor(name) {
    super(name); // to invoke parent class constructor
  }
  work() {
    super.play(); // or this.play()
    console.log("Child working");
  }
}
const engObj = new Engineer("Arif");
