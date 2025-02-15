function person() {
  (this.name = "arif"), (this.age = 34), (this.skill = "bat");

  this.getName = () => {
    return `My name is ${this.name}`;
  };
}
const constructor = new person();
console.log(typeof(constructor)); // object
console.log(constructor); // 
console.log(constructor.age); // 34
